import { Navbar, Footer } from "@/components";
import LocomotiveScrollWrappper from '@/components/animation/LocomotiveScrollWrapper'

export default function Page({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative">
            <Navbar />
            <LocomotiveScrollWrappper>
                {children}
            <Footer />
            </LocomotiveScrollWrappper>
        </main>
    );
}