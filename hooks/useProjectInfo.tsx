import { useState, useEffect } from 'react';
import ProjectInfoProps from '@/interfaces/ProjectInfoProps';

export const projectInfos = [
    {
        id: 1,
        proj: "sas",
        name: 'Student Attendance System',
        tech: 'Java / JavaScript',
        date: 'April 2021',
        desc: 'A Student Attendance Management System built with ExpressJS/Java, Bootstrap, JQuery and MySQL. ',
        tags: ['Web', 'School Project'],
        info: undefined,
        viewLinks: 'https://github.com/redfrogsss/attendance-system-nodejs',
        img: "/projects/sas/01.webp",
        links: [
            {name: "GitHub", link: "https://github.com/redfrogsss/attendance-system-nodejs"}
        ],
        docs: [
            { name: "Overview", link: "/projects/sas/doc/overview.md" },
            { name: "Screenshots", link: "/projects/sas/doc/screenshots.md" },
        ]
    },
    {
        id: 2,
        proj: "redstream",
        name: 'RedStream',
        tech: 'React / ExpressJS',
        date: 'April 2021',
        desc: 'A Movie Streaming Website built with ReactJS, MaterialUI, ExpressJS, Firebase and FFmpeg.',
        tags: ['Web', 'School Project', 'Movie Streaming'],
        info: undefined,
        viewLinks: 'https://github.com/redfrogsss/RedStream',
        img: "/projects/redstream/01.webp",
        links: [
            {name: "GitHub", link: "https://github.com/redfrogsss/RedStream"}
        ],
        docs: [
            { name: "Overview", link: "/projects/redstream/doc/overview.md" },
            { name: "Screenshots", link: "/projects/redstream/doc/screenshots.md" },
        ]
    },
    {
        id: 3,
        proj: "gdsc-portfolio",
        name: 'GDSC Portfolio',
        tech: 'React',
        date: 'February 2022',
        desc: 'A portfolio website created for the GDSC portfolio workshop.',
        tags: ['Web', 'Workshop'],
        info: undefined,
        viewLinks: 'https://github.com/redfrogsss/gdsc-portfolio',
        img: "/projects/gdsc/1.webp",
        links: [
            {name: "GitHub", link: "https://github.com/redfrogsss/gdsc-portfolio"}
        ],
        docs: [
            { name: "Overview", link: "/projects/gdsc/doc/overview.md" },
            { name: "Screenshots", link: "/projects/gdsc/doc/screenshots.md" },
        ]
    },
    {
        id: 4,
        proj: "selfremind",
        name: 'SelfRemind',
        tech: 'NextJS',
        date: 'February 2022',
        desc: 'A selfhosted To-do List Manager built with Next.js, Chakra-UI and MySQL.',
        tags: ['Todo App', 'Side Project'],
        info: undefined,
        viewLinks: 'https://github.com/redfrogsss/selfremind',
        img: "/projects/selfremind/home.webp",
        links: [
            {name: "GitHub", link: "https://github.com/redfrogsss/selfremind"}
        ],
        docs: [
            { name: "Overview", link: "/projects/selfremind/doc/overview.md" },
            { name: "Tech Spec", link: "/projects/selfremind/doc/tech-spec.md" },
            { name: "Screenshots", link: "/projects/selfremind/doc/screenshots.md" },
        ]
    },
    {
        id: 5,
        proj: "jacky-fan",
        name: 'Jacky.Fan',
        tech: 'ReactJS',
        date: 'February 2023',
        desc: 'A personal website built with Vite, React, Typescript, DaisyUI and Tailwind CSS.',
        tags: ['Personal Website', 'Side Project'],
        info: undefined,
        viewLinks: 'https://github.com/redfrogsss/jacky.fan',
        img: "/projects/jackyfan/01.webp",
        links: [
            {name: "GitHub", link: "https://github.com/redfrogsss/jacky.fan"}
        ],
        docs: [
            { name: "Overview", link: "/projects/jackyfan/doc/overview.md" },
            { name: "Tech Spec", link: "/projects/jackyfan/doc/tech-spec.md" },
            { name: "Screenshots", link: "/projects/jackyfan/doc/screenshots.md" },
        ]
    },
    {
        id: 6,
        proj: "crs-web",
        name: 'CRS Web',
        tech: 'React',
        date: 'May 2023',
        desc: 'Web-based AI Conversational Recommender System built with React, Python Flask, MySQL and CRSLab.',
        tags: ['Web', 'AI', 'Final Year Project'],
        info: undefined,
        viewLinks: 'https://github.com/redfrogsss/CRS',
        img: "/projects/crs/conversation-english-1.webp",
        links: [
            {name: "GitHub", link: "https://github.com/redfrogsss/CRS"}
        ],
        docs: [
            { name: "Overview", link: "/projects/crs/doc/overview.md" },
            { name: "Tech Spec", link: "/projects/crs/doc/tech-spec.md" },
            { name: "Screenshots", link: "/projects/crs/doc/screenshots.md" },
        ]
    },
    {
        id: 7,
        proj: "mcmyconsole",
        name: 'McMyConsole',
        tech: 'React Native',
        date: 'May 2023',
        desc: 'A mobile app to monitor and manage Minecraft server from your phone.',
        tags: ['Mobile App', 'Side Project'],
        info: undefined,
        viewLinks: 'https://github.com/redfrogsss/McMyConsole-app',
        img: "/projects/mcmyconsole/McMyConsole.webp",  // TODO: Add image
        links: [
            {name: "GitHub", link: "https://github.com/redfrogsss/McMyConsole-app"}
        ],
        docs: [
            { name: "Overview", link: "/projects/mcmyconsole/doc/overview.md" },
            { name: "Tech Spec", link: "/projects/mcmyconsole/doc/tech-spec.md" },
            { name: "Screenshots", link: "/projects/mcmyconsole/doc/screenshots.md" },
        ]
    },
    {
        id: 8,
        proj: "nuxt-blog",
        name: 'Nuxt Blog',
        tech: 'NuxtJS',
        date: 'July 2023',
        desc: 'A blog web application built with Nuxt.js and Tailwind CSS.',
        tags: ['Personal Blog', 'Side Project'],
        info: undefined,
        viewLinks: 'https://github.com/redfrogsss/nuxt-blog',
        img: "/projects/nuxt-blog/01.webp",
        links: [
            {name: "GitHub", link: "https://github.com/redfrogsss/nuxt-blog"},
            {name: "Blog", link: "https://blog.jacky.fan"}
        ],
        docs: [
            { name: "Overview", link: "/projects/nuxt-blog/doc/overview.md" },
            { name: "Tech Spec", link: "/projects/nuxt-blog/doc/tech-spec.md" },
            { name: "Screenshots", link: "/projects/nuxt-blog/doc/screenshots.md" },
        ]
    },
    {
        id: 9,
        proj: "v2-jacky-fan",
        name: 'v2.Jacky.Fan',
        tech: 'NextJS',
        date: 'November 2023',
        desc: 'A personal website built with NextJS, Typescript, DaisyUI and TailwindCSS.',
        tags: ['Personal Website', 'Side Project'],
        info: undefined,
        viewLinks: 'https://github.com/redfrogsss/v2.jacky.fan',
        img: "/projects/v2jackyfan/01.webp",  // TODO: Add image
        links: [
            {name: "GitHub", link: "https://github.com/redfrogsss/v2.jacky.fan"},
            {name: "Website", link: "https://jacky.fan"}
        ],
        docs: [
            { name: "Overview", link: "/projects/v2jackyfan/doc/overview.md" },
            { name: "Tech Spec", link: "/projects/v2jackyfan/doc/tech-spec.md" },
            // { name: "Screenshots", link: "/projects/v2jackyfan/doc/screenshots.md" },
        ]
    },
    {
        id: 10,
        proj: "designo",
        name: 'Designo Multipage Website',
        tech: 'NextJS',
        date: 'June 2024',
        desc: 'A multi-page website built with Next.js, TypeScript, SASS and integrated with Strapi CMS.',
        tags: ['Website', 'Strapi CMS', 'Side Project'],
        info: undefined,
        viewLinks: 'https://github.com/redfrogsss/designo-multipage-website',
        img: "/projects/designo/01.png",
        links: [
            {name: "GitHub", link: "https://github.com/redfrogsss/designo-multipage-website"},
            {name: "Website", link: "https://designo.demo.jacky.fan/"}
        ],
        docs: [
            { name: "Overview", link: "/projects/designo/doc/overview.md" },
            { name: "Tech Spec", link: "/projects/designo/doc/tech-spec.md" },
            { name: "Screenshots", link: "/projects/designo/doc/screenshots.md" },
        ]
    },
];

export default function useProjectInfo(initialValue?: ProjectInfoProps[]) {
    const [data, setData] = useState(initialValue ?? []);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setData(projectInfos as ProjectInfoProps[]);

        setLoading(false);
    }, [])

    return { data, error, loading};
}