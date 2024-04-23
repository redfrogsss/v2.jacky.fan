'use client'
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { MouseEventHandler, useContext, useRef, useState } from "react";
import { Databases, ID } from "appwrite";
import { client } from "@/app/appwrite";
import { AlertContext } from "@/contexts/AlertContext";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import verifyCaptcha from "@/helpers/verifyCaptcha";

export default function ContactForm() {

    const inputName = useRef<HTMLInputElement>(null)
    const inputEmail = useRef<HTMLInputElement>(null)
    const inputMessage = useRef<HTMLTextAreaElement>(null)
    const { setAlert } = useContext(AlertContext);
    const { executeRecaptcha } = useGoogleReCaptcha()

    const [showRequired, setShowRequired] = useState({ name: false, email: false, message: false });

    const handleSubmit: MouseEventHandler<HTMLFormElement> = async (e) => {
        return;
        e.preventDefault();

        const data = {
            name: inputName?.current?.value || undefined,
            email: inputEmail?.current?.value || undefined,
            message: inputMessage?.current?.value || undefined,
            created_at: new Date().toLocaleString('en-US', { timeZone: 'Asia/Hong_Kong' }),
        }

        const isEmpty = (v: string | undefined) => v === undefined || v.length === 0;

        if (isEmpty(data.name) || isEmpty(data.email) || isEmpty(data.message)) {
            setShowRequired({ name: isEmpty(data.name), email: isEmpty(data.email), message: isEmpty(data.message) });
            return;
        } else {
            setShowRequired({ name: false, email: false, message: false })
        }

        try {
            if (executeRecaptcha === undefined) {
                throw new Error(`executeRecaptcha is undefine: ${executeRecaptcha}`);
            }

            const token = await executeRecaptcha();
            const verified = await verifyCaptcha(token);

            if (!verified) {
                throw new Error(`Recaptcha is not verified: ${verified}`);
            }

            const databases = new Databases(client);

            await databases.createDocument(
                'jacky_fan',
                'contact_form',
                ID.unique(),
                data
            );

            if (setAlert) {
                setAlert({
                    show: true,
                    message: "Submitted Successfully.",
                    type: "success",
                });
            }

        } catch (e) {
            if (setAlert) {
                setAlert({
                    show: true,
                    message: "Something Went Wrong. Please try again later.",
                    type: "error",
                });
            }
            console.error(e);
        }
    }

    return (
        <form action="mailto:contact@jacky.fan" onSubmit={handleSubmit} method="get">

            <div className="form-control w-full md:max-w-xs mb-4">
                <label htmlFor="contactName" className="label">
                    <span className="label-text text-md md:text-xl">What is your name?</span>
                </label>
                <input id="contactName" type="text" placeholder="Type your name here" className="input input-bordered w-full md:max-w-xs" ref={inputName} formNoValidate name="subject" />
                {showRequired.name &&
                    <label className="label">
                        <span className="label-text-alt text-error">This field is required.</span>
                    </label>
                }
            </div>

            <div className="form-control w-full md:max-w-xs mb-4">
                <label htmlFor="contactEmail" className="label">
                    <span className="label-text text-md md:text-xl">What is your Email?</span>
                </label>
                <input id="contactEmail" type="email" placeholder="Type your email here" className="input input-bordered w-full md:max-w-xs" ref={inputEmail} formNoValidate />
                {showRequired.email &&
                    <label className="label">
                        <span className="label-text-alt text-error">This field is required.</span>
                    </label>
                }
            </div>

            <div className="form-control w-full mb-4">
                <label htmlFor="contactMessage" className="label">
                    <span className="label-text text-md md:text-xl">What is your message?</span>
                </label>
                <textarea id="contactMessage" className="textarea textarea-bordered h-24" placeholder="Type your message here" ref={inputMessage} name="body"></textarea>
                {showRequired.message &&
                    <label className="label">
                        <span className="label-text-alt text-error">This field is required.</span>
                    </label>
                }
            </div>

            <button type="submit" className="btn btn-neutral">
                Submit
                <PaperAirplaneIcon className="h-6 w-6 text-content" />
            </button>

        </form>
    );
}