import NavbarItem from "../NavbarItem";

const NavbarGroup = ({ title, items, isActive, setCategory }) => {
    return (
        <>
            <h5 className={`list-group-item ${isActive ? 'active' : ''}`}>{title}</h5>
            {items.map((item, index) => (
                <NavbarItem key={index} label={item.label} category={item.category} setCategory={setCategory} />
            ))}
        </>
    );
};

export default NavbarGroup;