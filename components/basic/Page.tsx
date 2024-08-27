import { Navbar, Footer } from "@/components";
import LocomotiveScrollWrappper from '@/components/animation/LocomotiveScrollWrapper'
import PageEnterAnimation from "../animation/PageEnterAnimation";

async function getData(url: string) {
    const res = await fetch(`${process.env.STRAPI_URL}/api/site-setting?populate[menuItem][populate][0]=page&populate=quickLinks`);

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Page({ children, reserveNavbarHeight = true }: { children?: React.ReactNode, reserveNavbarHeight?: boolean }) {

    const { data } = await getData("site-setting");

    return (
        <main className="relative">
            <Navbar siteSetting={data} />
            <PageEnterAnimation/>
            <LocomotiveScrollWrappper>
                <div className={`min-h-screen text-md md:text-xl ${reserveNavbarHeight? "page" : ""}`}>
                    {children}
                </div>
                <Footer siteSetting={data} />
            </LocomotiveScrollWrappper>
        </main>
    );
}