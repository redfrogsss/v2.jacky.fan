'use client'

import { PageExitContext } from '@/contexts/PageExitContext';
import { useRouter } from 'next/navigation'
import { MouseEventHandler, useContext } from 'react'

function ActiveLink({ children, href }: { children?: React.ReactNode, href: string }) {
    const router = useRouter()

    const { pageExit, setPageExit } = useContext(PageExitContext);

    const handleClick: MouseEventHandler = (e) => {
        e.preventDefault();
        setPageExit(!pageExit);

        setTimeout(() => {
            router.push(href);
        }, 700);
    }

    return (
        <a href={href} onClick={handleClick}>
            {children}
        </a>
    )
}

export default ActiveLink