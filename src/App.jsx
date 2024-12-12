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
import { useState } from 'react';

function App() {
    const [movies, setMovies] = useState();
    const [searchQuery, setSearchQuery] = useState('');

    function search() {
        axios
            .get(BASIC_URI + '/search/movie', {
                params: {
                    api_key: API_KEY,
                    query: searchQuery,
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <GlobalContext.Provider value={{ searchQuery, setSearchQuery, search }}>
            <BrowserRouter>
                <Routes>
                    <Route Component={DefaultLayout}>
                        <Route index Component={HomePage}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}

export default App;
