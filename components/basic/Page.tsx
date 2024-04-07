import { Navbar, Footer } from "@/components";
import LocomotiveScrollWrappper from '@/components/animation/LocomotiveScrollWrapper'
import PageEnterAnimation from "../animation/PageEnterAnimation";

export default function Page({ children, reserveNavbarHeight = true }: { children?: React.ReactNode, reserveNavbarHeight?: boolean }) {
    return (
        <main className="relative">
            <Navbar />
            <PageEnterAnimation/>
            <LocomotiveScrollWrappper>
                <div className={`min-h-screen text-md md:text-xl ${reserveNavbarHeight? "page" : ""}`}>
                    {children}
                </div>
                <Footer />
            </LocomotiveScrollWrappper>
        </main>
    );
}