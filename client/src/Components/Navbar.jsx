import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const collapseRef = useRef(null);
    const location = useLocation();

    // Handle toggle menu button click
    const toggleMenu = () => {
        const bsCollapse = window.bootstrap.Collapse.getOrCreateInstance(collapseRef.current);
        if (isMenuOpen) {
            bsCollapse.hide();
        } else {
            bsCollapse.show();
        }
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking a nav link
    const handleNavLinkClick = () => {
        const bsCollapse = window.bootstrap.Collapse.getInstance(collapseRef.current);
        if (bsCollapse && window.innerWidth < 992) {
            bsCollapse.hide();
        }
    };

    // Close menu and reset icon on route change
    useEffect(() => {
        const bsCollapse = window.bootstrap.Collapse.getInstance(collapseRef.current);
        if (bsCollapse && window.innerWidth < 992) {
            bsCollapse.hide();
        }
        setIsMenuOpen(false);
    }, [location]);

    // Sync icon state with Bootstrap collapse events
    useEffect(() => {
        const collapseEl = collapseRef.current;

        const handleHidden = () => setIsMenuOpen(false);
        const handleShown = () => setIsMenuOpen(true);

        collapseEl?.addEventListener('hidden.bs.collapse', handleHidden);
        collapseEl?.addEventListener('shown.bs.collapse', handleShown);

        return () => {
            collapseEl?.removeEventListener('hidden.bs.collapse', handleHidden);
            collapseEl?.removeEventListener('shown.bs.collapse', handleShown);
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg sticky-top shadow custom-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand text-white fw-bold fs-4" to="/" onClick={handleNavLinkClick}>
                    <i className="fas fa-book-open me-2"></i>BookBazaar
                </Link>

                <button
                    className={`navbar-toggler custom-toggler ${isMenuOpen ? 'open' : ''}`}
                    type="button"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </button>

                <div className="collapse navbar-collapse transition-collapse" id="navbarSupportedContent" ref={collapseRef}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/" onClick={handleNavLinkClick}>
                                <i className="fas fa-home me-1"></i>Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/buy" onClick={handleNavLinkClick}>
                                <i className="fas fa-shopping-cart me-1"></i>Buy Books
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/sell" onClick={handleNavLinkClick}>
                                <i className="fas fa-money-bill-wave me-1"></i>Sell Books
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/login" onClick={handleNavLinkClick}>
                                <i className="fas fa-sign-in-alt me-1"></i>Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
