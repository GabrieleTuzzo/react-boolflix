import { useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASIC_URI, API_KEY } from '../../config/URL';
import GlobalContext from '../../contexts/GlobalContext';
import style from './Header.module.css';

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
        <header className={style.HeaderMain}>
            <div className={style.LogoWrapper}>
                <Link to={'/'}>
                    <img
                        className={style.HeaderLogo}
                        src="/logos/logo.png"
                        alt=""
                    />
                </Link>
            </div>
            <form className={style.search_form} onSubmit={handleSubmit}>
                <input
                    placeholder="Type here..."
                    className={style.search_input}
                    type="text"
                    onChange={handleChange}
                    value={searchQuery}
                />
                <input
                    className={style.search_button}
                    type="submit"
                    value="Search"
                />
            </form>
        </header>
    );
}
