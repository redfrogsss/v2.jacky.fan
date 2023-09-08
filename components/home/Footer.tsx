export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
            <div>
                <ul className="menu menu-horizontal">
                    <li><a href="#!" className="link link-primary">Email</a></li>
                    <li><a href="#!" className="link link-primary">GitHub</a></li>
                    <li><a href="#!" className="link link-primary">LinkedIn</a></li>
                    <li><a href="#!" className="link link-primary">Blog</a></li>
                </ul>
            </div>
            <div>
                <p><span className="text-primary">Jacky.Fan</span> @ 2023 - Open Source via <a className="link link-primary" href="https://github.com/redfrogsss/v2.jacky.fan" target="_blank">GitHub</a>.</p>
            </div>
        </footer>
    );
}