import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <div>
            <div className='h-14'>
                <Navbar />
            </div>
            <div className='min-h-[calc(100vh-160px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;