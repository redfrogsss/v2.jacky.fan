'use client'

import { PageExitContext } from '@/contexts/PageExitContext';
import { useRouter } from 'next/navigation'
import { MouseEventHandler, useContext } from 'react'

function ActiveLink({ children, href, className = "" }: { children?: React.ReactNode, href: string, className?: string }) {
    const router = useRouter()

    const { pageExit, setPageExit } = useContext(PageExitContext);

    const handleClick: MouseEventHandler = (e) => {

        if (!href.startsWith("/") && !href.includes(window.location.origin)) return;    // use default behavior for external links

        e.preventDefault();
        if (window.location.pathname == href) return;
        
        setPageExit(!pageExit);

        setTimeout(() => {
            router.push(href);
        }, 700);
    }

    return (
        <a href={href} onClick={handleClick} target="_blank" className={className}>
            {children}
        </a>
    )
}

export default ActiveLink