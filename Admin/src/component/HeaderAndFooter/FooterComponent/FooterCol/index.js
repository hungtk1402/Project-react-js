const FooterCol = ({ title, links }) => {
    return (
        <div className="col-md-4">
            <h5>{title}</h5>
            <ul className="list-unstyled">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterCol