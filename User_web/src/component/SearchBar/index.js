import { useState } from "react";
import IconSearch from '../../img/iconSearch.png'
const SearchBar = ({ onSearch, placeholder }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        onSearch(inputValue);
        setInputValue(''); // Clear input after search
    };

    return (
        <div className="box-search">
            <img className="icon-search" src={IconSearch} alt="icon-search"></img>
            <input
                type="text"
                className="form-control search_value"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

                <button className="button-search" onClick={handleSearch}>
                    Search
                </button>

        </div>
    );
};

export default SearchBar;
