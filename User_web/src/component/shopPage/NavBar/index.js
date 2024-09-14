import NavbarGroup from "./NavbarGroup";
import NavbarItem from "./NavbarItem";
const menuItems = [
    {
        title: 'APPLE',
        items: [{ label: 'All', category: 'All' }]
    },
    {
        title: 'IPHONE & MAC',
        items: [
            { label: "iPhone", category: "iphone" },
            { label: "iPad", category: "ipad" },
            { label: "MacBook", category: "macbook" },
        ]
    },
    {
        title: 'WIRELESS',
        items: [
            { label: "AirPods", category: "airpod" },
            { label: "Watch", category: "watch" },
        ]
    },
    {
        title: 'OTHER',
        items: [
            { label: "Mouse", category: "mouse" },
            { label: "Keyboard", category: "keyboard" },
            { label: "Other", category: "other" },
        ]
    },
];
const NavbarShopPage = ({setCategory}) => {

    return (
        <div className="col-md-3">
            <div className="list-group">
                {menuItems.map((group, index) => (
                    <div key={index}>
                        {group.items ? (
                            <NavbarGroup
                                key={index}
                                title={group.title}
                                items={group.items}
                                isActive={index === 0}
                                setCategory={setCategory}
                            />) : (<NavbarItem
                                label={group.label}
                                category={group.category}
                                setCategory={setCategory}
                            ></NavbarItem>)
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NavbarShopPage;