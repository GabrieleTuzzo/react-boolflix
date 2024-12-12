import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import HomePage from './pages/HomePage';
// Layouts
import DefaultLayout from './layouts/DefaultLayout';
// Contexts
import GlobalContext from './contexts/GlobalContext';
import { useState } from 'react';

function App() {
    const [movies, setMovies] = useState(null);
    const [tv, setTv] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <GlobalContext.Provider
            value={{ searchQuery, setSearchQuery, setMovies, setTv }}
        >
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
