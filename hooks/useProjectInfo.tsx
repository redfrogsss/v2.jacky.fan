import { useState, useEffect } from 'react';
import ProjectInfoProps from '@/interfaces/ProjectInfoProps';

export default function useProjectInfo(initialValue?: ProjectInfoProps[]) {
    const [data, setData] = useState(initialValue ?? []);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const projectInfos = [
            {
                id: 1,
                name: 'Student Attendance System',
                tech: 'Java / JavaScript',
                date: 'April 2021',
                desc: 'A Student Attendance Management System built with ExpressJS/Java, Bootstrap, JQuery and MySQL. ',
                tags: ['Web', 'School Project'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/attendance-system-nodejs',
                img: "/projects/sas/01.webp",
            },
            {
                id: 2,
                name: 'RedStream',
                tech: 'React / ExpressJS',
                date: 'April 2021',
                desc: 'A Movie Streaming Website built with ReactJS, MaterialUI, ExpressJS, Firebase and FFmpeg.',
                tags: ['Web', 'School Project', 'Movie Streaming'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/RedStream',
                img: "/projects/redstream/01.webp",
            },
            {
                id: 3,
                name: 'GDSC Portfolio',
                tech: 'React',
                date: 'February 2022',
                desc: 'A portfolio website created for the GDSC portfolio workshop.',
                tags: ['Web', 'Workshop'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/gdsc-portfolio',
                img: "/projects/gdsc/1.webp",
            },
            {
                id: 4,
                name: 'SelfRemind',
                tech: 'NextJS',
                date: 'February 2022',
                desc: 'A selfhosted To-do List Manager built with Next.js, Chakra-UI and MySQL.',
                tags: ['Todo App', 'Side Project'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/selfremind',
                img: "/projects/selfremind/home.webp",
            },
            {
                id: 5,
                name: 'Jacky.Fan',
                tech: 'ReactJS',
                date: 'February 2023',
                desc: 'A personal website built with Vite, React, Typescript, DaisyUI and Tailwind CSS.',
                tags: ['Personal Website', 'Side Project'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/jacky.fan',
                img: "/projects/jackyfan/01.webp",
            },
            {
                id: 6,
                name: 'CRS Web',
                tech: 'React',
                date: 'May 2023',
                desc: 'Web-based AI Conversational Recommender System built with React, Python Flask, MySQL and CRSLab.',
                tags: ['Web', 'AI', 'Final Year Project'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/CRS',
                img: "/projects/crs/conversation-english-1.webp",
            },
            {
                id: 7,
                name: 'McMyConsole',
                tech: 'React Native',
                date: 'May 2023',
                desc: 'A mobile app to monitor and manage Minecraft server from your phone.',
                tags: ['Mobile App', 'Side Project'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/McMyConsole-app',
                img: "/projects/mcmyconsole/McMyConsole.webp",  // TODO: Add image
            },
            {
                id: 8,
                name: 'Nuxt Blog',
                tech: 'NuxtJS',
                date: 'July 2023',
                desc: 'A blog web application built with Nuxt.js and Tailwind CSS.',
                tags: ['Personal Blog', 'Side Project'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/nuxt-blog',
                img: "/projects/nuxt-blog/01.webp",
            },
            {
                id: 8,
                name: 'v2.Jacky.Fan',
                tech: 'NextJS',
                date: 'November 2023',
                desc: 'A personal website built with NextJS, Typescript, DaisyUI and TailwindCSS.',
                tags: ['Personal Website', 'Side Project'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/v2.jacky.fan',
                img: "/projects/v2jackyfan/01.webp",  // TODO: Add image
            },
        ];

        setData(projectInfos as ProjectInfoProps[]);

        setLoading(false);
    }, [])

    return { data, error, loading };

}