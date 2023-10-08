import axios from "axios";

export default function verifyCaptcha(token: string) {
    return new Promise(async (res, rej) => {
        const requestOpt: RequestInit | undefined = {
            cache: 'no-store',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token,
            }),
        }
        try {
            const data = await fetch(`/api/captcha`, requestOpt)
            if (data.ok) res(true);
            else res(false);
        } catch (error) {
            rej(error)
        }
    })
}