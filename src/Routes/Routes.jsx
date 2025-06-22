import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/about',
        element: <About />
    }
])