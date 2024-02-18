import { Navbar, Footer } from "@/components";
import LocomotiveScrollWrappper from '@/components/animation/LocomotiveScrollWrapper'

export default function Page({ children, reserveNavbarHeight = true }: { children?: React.ReactNode, reserveNavbarHeight?: boolean }) {
    return (
        <main className="relative">
            <Navbar />
            <LocomotiveScrollWrappper>
                <div className={`min-h-screen ${reserveNavbarHeight? "page" : ""}`}>
                    {children}
                </div>
                <Footer />
            </LocomotiveScrollWrappper>
        </main>
    );
}