import React from "react";
import flogo from '../images/logo.png';
import { Col, Row } from 'reactstrap';
import '../Footer/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function footer() {
    return (
        <>
            <Row>
                <Col lg="12" md="12" sm="12" xs="12">
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1gCZmnIoDDZIABebkxuPH0eGTHG8&ehbc=2E312F"
                        width="100%"
                        height="380"
                        title="maharaja map"
                        className="footer-map">
                    </iframe>
                </Col>
            </Row>
            <Row>
                <Col lg="4" md="4" sm="4" xs="4"></Col>
                <Col lg="4" md="4" sm="4" xs="4">
                    <img src={flogo} alt="footerimage" className="footer-logo" />
                </Col>
                <Col lg="4" md="4" sm="4" xs="4"></Col>
            </Row>

            <Row className="footer-icons">
                <Col lg="4" md="4" sm="4" xs="4"></Col>
                <Col lg="4" md="4" sm="4" xs="4">
                    <a href="https://www.facebook.com/Maharajaicecreams/" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    </a>
                    <a href="https://x.com/i/flow/login?redirect_after_login=%2FVinothPawar" target="_blank" rel="noopener noreferrer" className="icon-link ml-3">
                        <FontAwesomeIcon icon="fa-brands fa-twitter" />
                    </a>
                    <a href="https://www.instagram.com/_official_maharajaicecream/" target="_blank" rel="noopener noreferrer" className="icon-link ml-3">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/vinoth-pawar-3b4317144/" target="_blank" rel="noopener noreferrer" className="icon-link ml-3">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCxRT2ypZn4eZAUDvlVVz6vg" target="_blank" rel="noopener noreferrer" className="icon-link ml-3">
                        <FontAwesomeIcon icon="fa-brands fa-youtube" />
                    </a>
                </Col>
                <Col lg="4" md="4" sm="4" xs="4"></Col>

            </Row>
            <Row className="opening">
                <Col lg="3" md="3" sm="3" xs="3"></Col>

                <Col lg="3" md="4" sm="12" xs="12" >
                    <h3>ABOUT US</h3>
                    <p>Our mission is really to make change in the world.To do so ,Maharaja ice cream's that has three missions to strive the business process sucessfully...</p>
                </Col>
                <Col lg="3" md="4" sm="12" xs="12">
                    <h3>OPENING HOURS:</h3>
                    <p>Monday To Sunday  :    7 a.m To 11 p.m.</p>
                </Col>
                <Col lg="3" md="3" sm="3" xs="3"></Col>
            </Row>
        </>
    );
}

export default footer;
