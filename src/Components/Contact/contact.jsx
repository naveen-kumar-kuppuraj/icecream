import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ImLocation } from "react-icons/im";
import { PiPhoneCallBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import Footer from '../Footer/footer';
import '../Contact/Contact.css';
import Consumerform from '../Rest API/Insertprocess';
import ConsumerList from '../Rest API/Readprocess';



const MyForm = () => {
  return (
    <>
      <Container>
        <Row className='col-row'>
          <Col lg="6" md="6" sm="12" xs="12">
            <h1 className="contact">CONTACT US</h1>

            <div>
              <h2 className="office">Main Office</h2>
              <address className="office-main"><ImLocation />No.14/2,Police manickam street,Ayanavaram,Chennai-600 023<br></br>
                <PiPhoneCallBold />+94440 63524 <PiPhoneCallBold />+91 44-2645 3524<br></br>
                <MdEmail /> <strong className="mail">enquiry@maharajaicecream.com</strong>
              </address>
              <h2 className="retail">Retail Outlet</h2>
              <address className="outlet-retail"><ImLocation />No.43,Audiappa Naicken Street,Sowcarpet,Chennai-600 079<br></br>
                <PiPhoneCallBold />+91 94440 63524
              </address>
            </div>

          </Col>

          <Col lg="6" md="6" sm="12" xs="12">
            <img src='https://img.freepik.com/free-vector/delicious-ice-creams-collection_23-2147494129.jpg?ga=GA1.1.285793457.1725943740&semt=ais_hybrid' alt='' className='img-fluid' />
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" xs="12">
            <Consumerform />
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <ConsumerList />
          </Col>

        </Row>
      </Container>




      <Footer />

    </>
  );
}

export default MyForm;

