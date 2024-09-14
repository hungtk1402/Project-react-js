import './footer.css'
import FooterCol from './FooterCol';
const footerData = [
    {
        title: "CUSTOMER SERVICES",
        links: [
            { href: "#", label: "Help & Contact Us" },
            { href: "#", label: "Returns & Refunds" },
            { href: "#", label: "Online Stores" },
            { href: "#", label: "Terms & Conditions" },
        ],
    },
    {
        title: "COMPANY",
        links: [
            { href: "#", label: "What We Do" },
            { href: "#", label: "Available Services" },
            { href: "#", label: "Latest Posts" },
            { href: "#", label: "FAQs" },
        ],
    },
    {
        title: "SOCIAL MEDIA",
        links: [
            { href: "#", label: "Twitter" },
            { href: "#", label: "Instagram" },
            { href: "#", label: "Facebook" },
            { href: "#", label: "Pinterest" },
        ],
    },
];
const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    {footerData.map((column, index) => (
                        <FooterCol key={index} title={column.title} links={column.links} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FooterComponent