import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-[calc(100vh-156px)] overflow-x-hidden pt-14'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Main;