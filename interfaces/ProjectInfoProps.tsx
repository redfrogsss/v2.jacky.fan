export default interface ProjectInfoProps {
    id: number;
    name: string;
    tech: string;
    date: string;
    desc: string;
    tags: string[];
    info: any;  // TODO: change this to a type
    viewLinks: string;
    img: string;
}
