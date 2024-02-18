import ProjectFilterBadge from "./ProjectFilterBadge";

export default function ProjectFilter ({filterBadges} : {filterBadges: string[]}) {
    return (
        <form className="border-b py-4 md:py-8 text-md md:text-xl">
            <div className="inline flex flex-row gap-x-4 md:gap-x-8">
                <p>
                    Tags:
                </p>
                <div className="flex flex-row gap-x-4 gap-y-4 flex-wrap">
                    {filterBadges.map((badge, index) => <ProjectFilterBadge key={index} name={badge} />)}
                </div>
            </div>
        </form>
    );
}