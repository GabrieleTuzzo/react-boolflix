import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
}
