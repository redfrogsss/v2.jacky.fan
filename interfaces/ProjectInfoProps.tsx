export default interface ProjectInfoProps {
    id: number;
    proj: string;
    name: string;
    tech: string;
    date: string;
    desc: string;
    tags: string[];
    info: any;  // TODO: change this to a type
    viewLinks: string;
    img: string;
}
