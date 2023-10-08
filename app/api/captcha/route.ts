import axios from "axios";

export const runtime = "edge"; // cloudflare edge

export async function POST(request: Request) {
    const { token } = await request.json();
    try {
        if (!token) throw new Error();
        const res = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
        );

        if (res.data.score > 0.5) {
            return new Response(null, {
                status: 200,
            });
        } else {
            return new Response(null, {
                status: 403,
            });
        }
    } catch (error) {
        return new Response(null, {
            status: 400,
        });
    }
}
