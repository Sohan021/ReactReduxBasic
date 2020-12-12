import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
    Navbar,
    Button,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { SignOut } from "../../actions/Auth/signInActions";

const NavbarComponent = ({ toggleSidebar, props }) => {


    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

    const dispatch = useDispatch();


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        dispatch(SignOut());

    }
    return (
        <Navbar
            color="#fff"
            style={{ backgroundColor: "#1FC46C", height: "60px" }}
            light
            className="navbar"
            expand="md"
            fixed="top"
        >
            <Button color="dark" onClick={toggleSidebar}>
                <FontAwesomeIcon color="#fff" icon={faAlignLeft} />
            </Button>
            <NavbarToggler onClick={toggleTopbar} />
            <Collapse isOpen={topbarIsOpen} navbar>

                {userInfo ? (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{ color: "#fff" }} href="/appsharerprofiledetails"><h5>{userInfo.item1.phoneNumber}</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{ color: "#fff" }} onClick={handleLogout}><h5>Log Out</h5></NavLink>
                        </NavItem>
                    </Nav>
                ) : (
                        <Nav className="ml-auto" navbar>
                            <Nav>
                                <a href="/signin" style={{ color: "#fff" }}><h5>SignIn</h5></a>
                            </Nav>
                        </Nav>
                    )}

            </Collapse>
        </Navbar >
    );

};

export default NavbarComponent;


