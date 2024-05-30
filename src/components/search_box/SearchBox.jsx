import css from './SearchBox.module.css'
import { useId, useState } from "react";

const SearchBox = ({ filterContactsByName }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
        filterContactsByName(value);
    }

    const fieldId = useId();
    
    return (
        <div className={css.searchForm}>
            <label htmlFor={`search-${fieldId}`}>Find contacts by name</label>
            <input
                type='text'
                name='search'
                id={`search-${fieldId}`}
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
};
export default SearchBox;