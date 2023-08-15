import React from 'react';
import logo from '../images/logo.JPG';

function Header() {
    return (
        <div className="">
            <nav className="nav navbar-expand-lg navbar bg-light">
                <div className="collapse navbar-collapse container-fluid position-relative">

                    {/* Add button for toggling the navigation menu on mobile devices */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* 1. Logo */}
                    <a className="navbar-brand col-8 col-md-2" href="/">
                        <img src={logo} alt="Company Logo" width="150px" className="d-inline-block align-text-top" />
                    </a>

                    {/* 2. Search Bar */}
                    <form className="d-flex col-12 col-md-6 align-items-center">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search" />
                            <label className="input-group-text bg-white border-0" htmlFor="search">
                                <i className="fa fa-search"></i>
                            </label>
                        </div>
                    </form>

                    {/* 3. Login & Cart */}
                    <div className="nav-link">
                        {/* Login button */}
                        <a href="login.html" className="btn btn-outline-secondary me-2">Login</a>

                        {/* Cart button */}
                        <a href="cart.html" className="btn btn-outline-secondary ms-1 me-3" style={{ top: '6px' }}>
                            <i className="fa-solid fa-lg p-2 fa-cart-shopping"></i>
                            <span className="badge bg-danger rounded-pill">0</span>
                        </a>
                    </div>

                </div>
            </nav>

            {/* Header Second Part Nav Toolbar */}
            <div className="container d-flex">
                <nav className="navbar navbar-expand-lg mx-auto bg-opacity-75">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item mx-1 my-1">
                                <a className="nav-pills btn btn-outline-dark mt-sm-1" id="home" href="/#">Home</a>
                            </li>
                            <li className="nav-item mx-1 my-1">
                                <a className="nav-pills btn btn-outline-dark mt-sm-1" id="allpro" href="/#">All Products</a>
                            </li>
                            <li className="nav-item dropdown mx-1 my-2">
                                <a className="btn btn-outline-warning dropdown-toggle" id="women" href="#" role="button" data-bs-toggle="dropdown">Women</a>
                                <div className="dropdown-menu border-top-0">
                                    <a className="dropdown-item" href="/#">All Products</a>
                                    <a className="dropdown-item" href="/#">Dresses</a>
                                    <a className="dropdown-item" href="/#">Pants</a>
                                    <a className="dropdown-item" href="/#">Skirts</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown mx-1 my-2">
                                <a className="btn btn-outline-warning dropdown-toggle" id="men" href="#" role="button" data-bs-toggle="dropdown">Men</a>
                                <div className="dropdown-menu border-top-0">
                                    <a className="dropdown-item" href="/#">All Products</a>
                                    <a className="dropdown-item" href="/#">Shirts</a>
                                    <a className="dropdown-item" href="/#">Pants</a>
                                    <a className="dropdown-item" href="/#">Hoodies</a>
                                </div>
                            </li>
                            <li className="nav-item mx-1 my-1">
                                <a className="nav-pills btn btn-outline-dark mt-sm-1" id="kids" href="/#">Kids</a>
                            </li>
                            <li className="nav-item mx-1 my-1">
                                <a className="nav-pills btn btn-outline-dark mt-sm-1" id="contact" href="/#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* Header Second Part End */}
        </div>
    );
}

export default Header;
