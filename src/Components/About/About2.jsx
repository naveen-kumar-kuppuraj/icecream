import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import aimage from "../images/about1.jpg";


function about2() {
    return (
        <>
            <h2 className="text-center">OUR MISSIONS</h2>
            <Container>
                <Row className="row-ab3">
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src='https://img.freepik.com/premium-photo/electric-mixer-icon-kitchen-appliance-baking-tool-art-logo-illustration_762678-14718.jpg?ga=GA1.1.285793457.1725943740' alt='' className='img-fluid' />
                    </Col>

                    <Col lg="6" md="6" sm="12" xs="12">
                        <h4 className="our-head">MAHARAJA ICE CREAM PRODUCT MISSION</h4>
                        <p className='about-para'>Maharaja Ice Cream’s product mission is centered on delivering world-class, high-quality natural ice cream while maintaining an unwavering commitment to purity and sustainability. With a focus on incorporating only wholesome, natural ingredients, the company strives to offer products that not only delight the taste buds but also promote healthier choices for consumers. At the heart of this mission is a dedication to responsible business practices, which emphasize the importance of respecting and preserving the Earth and its environment. Through these efforts, Maharaja Ice Cream aims to foster a brand that is as eco-conscious as it is delicious.</p>
                    </Col>
                </Row>
                <Row className="row-ab3">
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src='https://img.freepik.com/free-vector/indian-rupee-investment-concept_23-2148008396.jpg?ga=GA1.1.285793457.1725943740&semt=ais_hybrid' alt='' className='img-fluid' />
                    </Col>

                    <Col lg="6" md="6" sm="12" xs="12">
                        <h4 className="our-head">MAHARAJ ICE CREAM<br></br> ECONOMIC MISSION</h4>
                        <p className='about-para'>Maharaja Ice Cream’s economic mission is focused on building a financially sound business that thrives through profitable growth. By prioritizing financial success, the company seeks to enhance the value for its stakeholders while ensuring sustainable long-term performance. This growth not only benefits investors but also creates expanded opportunities for the professional development and career advancement of its employees. Maharaja Ice Cream aims to foster a dynamic work environment where the success of the business translates into personal and professional growth for its entire team.</p>
                    </Col>
                </Row >
                <Row className="row-ab3">
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src='https://img.freepik.com/free-vector/delicious-cake-realistic-style_23-2147788717.jpg?ga=GA1.1.285793457.1725943740&semt=ais_hybrid' alt='' className='img-fluid' />
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <h4 className="our-head"> MAHARAJA ICE CREAM SOCIAL MISSION</h4>
                        <p className='about-para'>Maharaja Ice Cream’s social mission is to actively contribute to societal well-being while fostering the company's growth. The brand seeks to establish itself as a leader in recognizing the vital role businesses play within communities. By embracing this responsibility, Maharaja Ice Cream is dedicated to initiating innovative approaches that positively impact the quality of life both nationally and internationally. Through its social mission, the company aspires to set an example by making meaningful contributions that extend beyond its products, enriching society on multiple levels.</p>
                    </Col>
                </Row>


            </Container >
            <Container >
                <Row className='for-policy' >



                    <Col lg="6" md="6" sm="12" xs="12" className="quality-policy" >
                        <h4>Quality Policy</h4>
                        <p>Maharja Ice Cream is committed to satisfy our<br></br>esteemed customers by :</p>
                        <ul>
                            <li>Adopting Quality and Food Safety Managerment system. </li>
                            <li>Adhering Statutory & Legal Requirments</li>
                            <li>Ensuring best Quality Products and value for customer's money</li>
                            <li>Maintaning Timing Dekivery</li>
                            <li>Developing Good Working atmosphere and culture</li>
                            <li>Taking every efforts to up-grade the ice cream producers by providing required services and facilities</li>
                            <li>Also aiming at continual improvement in all spheres of our activities through periodical review of our above policy and resetting the quality and Food  Safety objectives.</li>
                        </ul>
                    </Col>


                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src={aimage} alt="about" height="600px" className="about-image"></img>

                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default about2;