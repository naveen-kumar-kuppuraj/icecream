import React from 'react';
import About2 from '../About/About2';
import '../About/About.css';
import { Row, Col, Container } from 'reactstrap';



function About() {
    return (
        <>
            <Container>
                <h1 className="custom-about"> ABOUT US</h1>
                <Row className="about-row">

                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src='https://img.freepik.com/free-vector/ice-cream-seller-concept-illustration_114360-1965.jpg?ga=GA1.1.285793457.1725943740&semt=ais_hybrid' alt='' className='img-fluid' />

                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">

                        <h3 id="company">Company Profile</h3>
                        <p className="para1">
                            <p><strong>Maharaja Ice cream</strong> is one among the <strong>famed ice cream manufactures and distributers of ice cream</strong> of numerous flavours. We are efficient and paramount in <strong>manufacturing and supplying Desert Ice cream</strong> with numerous flavours such as <strong>Rajasthan kulfi, Chocolate and Vanilla</strong>. Our <strong>ice creams </strong>are prepared in fresh manner and are garnished with fresh cherry and chocolate crunch. We use <strong>fresh finest quality milk cream</strong> and crushed ice to prepare <strong>the delicious ice cream</strong></p>

                            <p>Our <strong>Ice creams are supplied all over India</strong>. We attain fresh raw materials for <strong>preparing delicious ice creams</strong>. Our firm workers are expert in <strong>preparing delicious ice cream.</strong> We use advanced machine for preparing fresh ice creams from hygienically processed methods. We use perfect packaging materials in order safeguard our products against various kind of tampering. Our tight and protected ice cream package protects against any weather condition.</p>

                            <p>He started his business in a small firm but now due to his tremendous efforts his firm has lead up to higher standard. He provided <strong>fresh and quality ingredients</strong> in preparing <strong>fresh and delicious ice cream</strong> that gives the <strong>hygienic taste </strong>to each and every individual. Hence he made his firm to be the famous firm for the past many years and will be the <strong>best international  in the upcoming years</strong></p>
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className='dp-row'>

                <Row>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <img src='https://img.freepik.com/free-vector/boss-man-concept-illustration_114360-19846.jpg?ga=GA1.1.285793457.1725943740&semt=ais_hybrid' alt='' className='img-fluid' />
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <h1 className='text-center dp'>Director Profile</h1>
                        <p className='company-profile'>
                            <strong>Maharaja ice cream</strong> belongs to <strong>Mr.G. Ramnivas</strong> in the field of providing<strong> world class quality ice creams to the people in Chennai</strong>. His journey was <strong>started in the year 1989</strong> was set up as <strong>Rajasthan Kulfi Ice Cream and Maharaja Ice Cream.</strong> His effort and tremendous struggle made him to reach higher standards and hard to eye capture the business growth. His diligence and foresight for the business created the leading name with <strong>excellent class and pure delicious tasty ice cream.</strong> He is true towards legacy of business
                        </p>

                    </Col>
                </Row>
            </Container>


            <About2 />
        </>


    );
}

export default About;