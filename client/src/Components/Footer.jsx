import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-4 text-white">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-md-4 mb-3">
                        <h5 className="fw-bold">BookBazaar</h5>
                        <p className="small">
                            Your one-stop destination to buy and sell books at the best prices.
                        </p>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h6 className="fw-semibold">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><Link className="footer-link" to="/">Home</Link></li>
                            <li><Link className="footer-link" to="/buy">Buy Books</Link></li>
                            <li><Link className="footer-link" to="/sell">Sell Books</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h6 className="fw-semibold">Contact</h6>
                        <p className="small mb-1"><i className="fas fa-envelope me-2"></i>support@bookbazaar.com</p>
                        <p className="small"><i className="fas fa-map-marker-alt me-2"></i>New Delhi, India</p>
                    </div>
                </div>

                <hr className="bg-light" />
                <p className="text-center small mb-0">© {new Date().getFullYear()} BookBazaar. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
