import { useState } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
    const [title, setTitle] = useState("Front-End");

    return (
        <nav
            className={
                darkMode
                    ? "sticky top-0 z-50 bg-[#2b2328]/95 backdrop-blur-md border-b border-[#493941]"
                    : "sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#f3d6df]"
            }
        >
            <div className="navbar-container">

                <h1
                    className={
                        darkMode
                            ? "navbar-title dark"
                            : "navbar-title"
                    }
                >
                    {title}
                </h1>

                <div className="navbar-menu">

                    <a
                        href="#home"
                        className={darkMode ? "nav-link dark" : "nav-link"}
                        onClick={() => setTitle("Front-End")}
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className={darkMode ? "nav-link dark" : "nav-link"}
                        onClick={() => setTitle("About")}
                    >
                        About
                    </a>

                    <a
                        href="#academic"
                        className={darkMode ? "nav-link dark" : "nav-link"}
                        onClick={() => setTitle("Academic")}
                    >
                        Academic
                    </a>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={
                            darkMode
                                ? "theme-button dark"
                                : "theme-button"
                        }
                        title={darkMode ? "Mode terang" : "Mode gelap"}
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                </div>

            </div>
        </nav>
    );
}