export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
            <div>
                <ul className="menu menu-horizontal">
                    <li><a href="mailto:contact@jacky.fan" className="link link-primary" target="_blank">Email</a></li>
                    <li><a href="https://github.com/redfrogsss" className="link link-primary" target="_blank">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/jacky-fan-dev/" className="link link-primary" target="_blank">LinkedIn</a></li>
                    <li><a href="https://blog.jacky.fan" className="link link-primary" target="_blank">Blog</a></li>
                </ul>
            </div>
            <div>
                <p><span className="text-primary">Jacky.Fan</span> @ 2023 - Open Source via <a className="link link-primary" href="https://github.com/redfrogsss/v2.jacky.fan" target="_blank">GitHub</a>.</p>
            </div>
        </footer>
    );
}