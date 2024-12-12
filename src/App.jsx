import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { API_KEY, BASIC_URI } from './config/URL';
// Pages
import HomePage from './pages/HomePage';
// Layouts
import DefaultLayout from './layouts/DefaultLayout';
// Contexts
import GlobalContext from './contexts/GlobalContext';
import { useEffect, useState } from 'react';

function App() {
    const [movies, setMovies] = useState(null);
    const [tv, setTv] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

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

    return (
        <GlobalContext.Provider value={{ searchQuery, setSearchQuery, search }}>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route
                            index
                            element={<HomePage movies={movies} tv={tv} />}
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}

export default App;
