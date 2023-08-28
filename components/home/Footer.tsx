export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div>
                <ul className="menu menu-horizontal bg-base-200">
                    <li><a>Email</a></li>
                    <li><a>LinkedIn</a></li>
                    <li><a>GitHub</a></li>
                </ul>
            </div>
            <div>
                <p><span className="text-primary">Jacky.Fan</span> @ 2023 - Open Source via <a className="link link-info" href="https://github.com/redfrogsss/v2.jacky.fan" target="_blank">GitHub</a>.</p>
            </div>
        </footer>
    );
}