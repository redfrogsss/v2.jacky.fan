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

    return (
        <form action="mailto:contact@jacky.fan" method="get">

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