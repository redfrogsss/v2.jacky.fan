export default function Navbar() {
    return (
        <div className="navbar bg-base-200 fixed z-50">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl"><span className="text-primary font-patrick_hand">Jacky FAN's</span> Website</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Work</a></li>
                    <li>
                        <details>
                            <summary>
                                Quick Links
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a href="https://github.com/redfrogsss" target="_blank">GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/jacky-fan-682516190/" target="_blank">LinkedIn</a></li>
                                <li><a href="https://blog.jacky.fan" target="_blank">Blog</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}