import { useContext } from 'react';
import axios from 'axios';
import { BASIC_URI, API_KEY } from '../../config/URL';
import GlobalContext from '../../contexts/GlobalContext';

export default function Header() {
    const { searchQuery, setSearchQuery, setMovies, setTv } =
        useContext(GlobalContext);

    function search() {
        if (searchQuery.trim() !== '') {
            axios
                .get(BASIC_URI + '/search/movie', {
                    params: {
                        api_key: API_KEY,
                        query: searchQuery,
                    },
                })
                .then((response) => {
                    console.log(response);
                    setMovies(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
            axios
                .get(BASIC_URI + '/search/tv', {
                    params: {
                        api_key: API_KEY,
                        query: searchQuery,
                    },
                })
                .then((response) => {
                    console.log(response);
                    setTv(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

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
