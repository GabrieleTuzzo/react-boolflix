import { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';

export default function Header() {
    const { searchQuery, setSearchQuery, search } = useContext(GlobalContext);

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        search();
    };
    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={searchQuery}
                />
                <input type="submit" value="Search" />
            </form>
        </header>
    );
}
