import Link from "next/link";

export default function Error404Page () {
    return <div className="min-h-screen w-screen flex flex-col gap-4 items-center justify-center">
        <p className="text-xl md:text-2xl w-fit">😵 404 Not Found 😵</p>
        <Link href="/" className="btn">Back to Home Page</Link>
    </div>;
}