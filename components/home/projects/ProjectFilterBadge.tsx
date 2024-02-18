export default function ProjectFilterBadge({ isChecked = true, name = "Lorem Ipsum" }: { isChecked?: boolean, name?: string }) {

    return (
        <label className="swap swap-indeterminate align-bottom">
            <input type="checkbox" defaultChecked={isChecked} />
            <div className="swap-on">
                <div className="badge badge-primary badge-lg">{name}</div>
            </div>
            <div className="swap-off">
                <div className="badge badge-primary badge-outline badge-lg">{name}</div>
            </div>
        </label>
    );
}