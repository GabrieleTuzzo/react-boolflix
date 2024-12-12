import './App.css';
import GlobalContext from './contexts/GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages Imports
import HomePage from './pages/HomePage';

function App() {
    return (
        <GlobalContext.Provider>
            <BrowserRouter>
                <Routes>
                    <Route index Component={HomePage}></Route>
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}

export default App;
