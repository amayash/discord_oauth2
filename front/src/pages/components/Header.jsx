import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <Navbar expand="md" className="bg-dark fw-bold fs-5">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-white" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-4">
                        <NavLink className="text-decoration-none text-secondary" to="http://localhost:3000/">Главная</NavLink>
                    </Nav>
                    <Nav>
                        {
                            props.links.map(route =>
                                <div key={route.path}>
                                    <NavLink className="text-decoration-none mx-3 text-secondary" to={route.path}>
                                        {route.label}
                                    </NavLink>
                                </div>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;