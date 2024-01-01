export default function Footer() {
    return (
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
            <div>
                <ul className="menu menu-horizontal">
                    <li><a href="mailto:contact@jacky.fan" className="link link-primary no-underline" target="_blank">Email</a></li>
                    <li><a href="https://github.com/redfrogsss" className="link link-primary no-underline" target="_blank">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/jacky-fan-dev/" className="link link-primary no-underline" target="_blank">LinkedIn</a></li>
                    <li><a href="https://blog.jacky.fan" className="link link-primary no-underline" target="_blank">Blog</a></li>
                </ul>
            </div>
            <div>
                <p><a href="https://jacky.fan" className="text-primary">Jacky.Fan</a> @ 2023 ~ 2024<br />Open Source via <a className="link link-primary no-underline" href="https://github.com/redfrogsss/v2.jacky.fan" target="_blank">GitHub</a></p>
            </div>
        </footer>
    );
}