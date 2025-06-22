import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Main = () => {
    return (
        <div>
            <div className='h-14'>
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default Main;