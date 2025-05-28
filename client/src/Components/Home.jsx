import React, { useEffect, useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (heroRef.current) {
                heroRef.current.classList.add('show');
            }
        }, 100); // delay to show transition

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ fontFamily: 'Poppins, sans-serif' }}>
            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center text-white" ref={heroRef}>
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">Welcome to BookBazaar</h1>
                    <p className="lead">Buy, Sell, and Explore Books with Ease</p>
                    <Link to="/buy" className="btn btn-warning btn-lg mt-3 shadow-lg">Explore Now</Link>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center fw-bold mb-5">What We Offer</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card home-card h-100 text-center">
                                <div className="card-body">
                                    <i className="fas fa-shopping-cart fa-3x mb-3 text-primary"></i>
                                    <h5 className="card-title fw-semibold">Buy Books</h5>
                                    <p className="card-text">Discover a wide range of books across genres and subjects at amazing prices.</p>
                                    <Link to="/buy" className="btn btn-outline-primary mt-3">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card home-card h-100 text-center">
                                <div className="card-body">
                                    <i className="fas fa-hand-holding-usd fa-3x mb-3 text-success"></i>
                                    <h5 className="card-title fw-semibold">Sell Books</h5>
                                    <p className="card-text">Have old books? Sell them to someone who needs them and earn money.</p>
                                    <Link to="/sell" className="btn btn-outline-success mt-3">Sell Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card home-card h-100 text-center">
                                <div className="card-body">
                                    <i className="fas fa-book-reader fa-3x mb-3 text-warning"></i>
                                    <h5 className="card-title fw-semibold">Community</h5>
                                    <p className="card-text">Join our vibrant community of book lovers and readers from around the country.</p>
                                    <Link to="/community" className="btn btn-outline-warning mt-3">Join Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
