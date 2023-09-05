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
                viewLink: 'https://github.com/redfrogsss/attendance-system-nodejs',
                img: "/projects/sas/01.png",
            },
            {
                id: 2,
                name: 'RedStream',
                tech: 'React / ExpressJS',
                date: 'April 2021',
                desc: 'A portfolio website created for the GDSC portfolio workshop.',
                tags: ['Web', 'Workshop'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/gdsc-portfolio',
                img: "/projects/redstream/01.png",
            },
            {
                id: 3,
                name: 'GDSC Portfolio',
                tech: 'React',
                date: 'May 2023',
                desc: 'Web-based AI Conversational Recommender System built with React, Python Flask, MySQL and CRSLab.',
                tags: ['Web', 'AI', 'Final Year Projects'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/CRS',
                img: "/projects/gdsc/1.png",
            },
            {
                id: 4,
                name: 'SelfRemind',
                tech: 'NextJS',
                date: 'February 2022',
                desc: 'A selfhosted To-do List Manager built with Next.js, Chakra-UI and MySQL.',
                tags: ['Todo App', 'Side Project'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/CRS',
                img: "/projects/selfremind/home.png",
            },
            {
                id: 5,
                name: 'CRS Web',
                tech: 'React',
                date: 'May 2023',
                desc: 'Web-based AI Conversational Recommender System built with React, Python Flask, MySQL and CRSLab.',
                tags: ['Web', 'AI', 'Final Year Projects'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/CRS',
                img: "/projects/crs/conversation-english-1.png",
            },
            {
                id: 6,
                name: 'v2.Jacky.Fan',
                tech: 'NextJS',
                date: 'September 2023',
                desc: 'A personal website built with NextJS, Typescript, DaisyUI and TailwindCSS.',
                tags: ['Personal Website', 'Side Project'],
                info: undefined,
                viewLinks: 'https://github.com/redfrogsss/v2.jacky.fan',
                img: "/projects/jackyfan/01.png",
            },
        ];

        setData(projectInfos);
        setLoading(false);
    }, [])

    return { data, error, loading };

}