import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Home/Home';
import AboutUs from '../About/About us';
import Icecreams from '../Icecream/icecreams';
import Gallery from '../Gallery/gallery';
import Contact from '../Contact/contact';
import InsertProcess from '../Rest API/Insertprocess';
import Readprocess from '../Rest API/Readprocess';
import logo from '../images/logo.png';
import '../Navbar/Navbar.css';

import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar  light expand="md" sticky="top" className="custom-navbar">
        
        <NavbarBrand href="/">
          <img src={logo} alt="logo" className="logo me-2"/>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem className="for-navbar">
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about-us">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/icecreams">Icecreams</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gallery">Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/icecreams" element={<Icecreams />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insert" element={<InsertProcess />} />
        <Route path="/read" element={<Readprocess />} />
      </Routes>
    </Router>
  );
}

export default Example;
