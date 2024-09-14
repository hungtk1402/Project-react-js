
const NavbarItem = ({ label, category, setCategory }) => {

    return (
      <button className="list-group-item" onClick={() => setCategory(category)}>
        {label}
      </button>
    );
  };
  
  export default NavbarItem;