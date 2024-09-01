import { getRichTextBlocks } from "@/helpers/strapi";
import Link from "next/link";

export default function Footer({ siteSetting }: { siteSetting: any }) {
    return (
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
            <div>
                <ul className="menu menu-horizontal">
                    {siteSetting.attributes.quickLinks.map((link: any, index: number) => (
                        <li key={index}>
                            <Link href={link.url} className="link link-primary no-underline" target="_blank">{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                { siteSetting.attributes.footerText.map((t: any, i: number) => getRichTextBlocks(t, {}, i)) }
            </div>
        </footer>
    );
}