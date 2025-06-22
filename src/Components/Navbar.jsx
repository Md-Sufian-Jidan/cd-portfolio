import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaUserAlt, FaBlog, FaEnvelope, FaFileAlt } from "react-icons/fa";

const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUserAlt /> },
    { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
    { name: "Blog", path: "/blog", icon: <FaBlog /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-accent shadow-md fixed top-0 left-0 w-full z-50">
            <div className="px-6 py-3 flex justify-between items-center">
                {/* ask teammates or mentor  */}
                <Link to="/" className="text-2xl font-bold text-primary">MdAbuSufianJidan</Link>

                <div className="hidden md:flex space-x-6 items-center">
                    {navItems.map(({ name, path, icon }) => (
                        <NavLink
                            key={name}
                            to={path}
                            className={({ isActive }) =>
                                `flex items-center gap-2 text-sm font-semibold ${isActive ? "text-primary" : "text-secondary hover:text-primary"
                                }`
                            }
                        >
                            {icon}
                            {name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-primary text-2xl">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="md:hidden overflow-hidden bg-accent px-4"
                    >
                        {navItems.map(({ name, path, icon }) => (
                            <NavLink
                                key={name}
                                to={path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 py-3 border-b border-light ${isActive ? "text-primary" : "text-secondary hover:text-primary"
                                    }`
                                }
                            >
                                {icon}
                                {name}
                            </NavLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;