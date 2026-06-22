import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import aarohanLogoSmall from "../../assets/logos/Aarohan.png";
import "./Header.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        if (location.pathname === "/" && location.state?.scrollTo) {
            const targetId = location.state.scrollTo;
            let clearStateTimeout;

            const timeoutId = setTimeout(() => {
                if (targetId === "top") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ 
                            behavior: "smooth", 
                            block: "center" 
                        });
                    }
                }
                
                clearStateTimeout = setTimeout(() => {
                    navigate("/", { replace: true, state: {} });
                }, 800);

            }, 300);

            return () => {
                clearTimeout(timeoutId);
                if (clearStateTimeout) clearTimeout(clearStateTimeout);
            };
        }
    }, [location, navigate]);

    const handleScrollToAbout = (e) => {
        e.preventDefault();
        closeMenu();

        if (location.pathname === "/") {
            const element = document.getElementById("about-container");
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        } else {
            navigate("/", { state: { scrollTo: "about-container" } });
        }
    };

    const handleGoHome = (e) => {
        e.preventDefault();
        closeMenu();

        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/", { state: { scrollTo: "top" } });
        }
    };

    return (
        <header className="global-header">
            <div className="logo-container">
                <Link to="/" onClick={handleGoHome}>
                    <img src={aarohanLogoSmall} className="aarohan-logo" alt="Aarohan 2026 Logo" />
                </Link>
            </div>

            <div className={`hamburger-menu ${isMenuOpen ? "hidden" : ""}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <nav className={`main-nav ${isMenuOpen ? "nav-open" : ""}`}>
                <div className="close-menu" onClick={closeMenu}>
                    &times;
                </div>

                <ul className="main-ul">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            end
                            onClick={handleGoHome}>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <a href="#about-container" className="about-link" onClick={handleScrollToAbout}>ABOUT US</a>
                    </li>
                    <li>
                        <NavLink
                            to="/brochure"
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            onClick={closeMenu}>
                            BROCHURE
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sample"
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            onClick={closeMenu}>
                            SAMPLE PAPER
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/answers"
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            onClick={closeMenu}>
                            ANSWER KEY
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/faqs"
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            onClick={closeMenu}>
                            FAQs
                        </NavLink>
                    </li>
                    <li>
                        <a href="#about-container" className="about-link" onClick={handleScrollToAbout}>GALLERY</a>                      
                    </li>
                </ul>
            </nav>
        </header>
    );
}