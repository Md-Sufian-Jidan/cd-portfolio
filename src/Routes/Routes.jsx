import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Resume from "../pages/Resume/Resume";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/resume',
                element: <Resume />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blog',
                element: <Blog />
            },
        ]
    },
])