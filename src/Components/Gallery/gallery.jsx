import React from 'react';
import '../Gallery/Gallery.css';
import { Container, Row, Col } from 'reactstrap';


const Gallery = () => {
  return (

    <Container fluid className="gallery-container">
      <Row className="gallery-row">
        <h1 className="gallery-title">Our Gallery</h1>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/matka-kulfi.jpg" alt="Ice Cream 1" className=" gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/culkhand_anjeer.jpg" alt="Ice Cream 3" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/abogatto.jpg" alt="Ice Cream 5" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/butter-scotch.jpg" alt="Ice Cream 6" className="gallery-image img-fluid" />

        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/r2.jpg" alt="Ice Cream 7" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/honey_nut.jpg" alt="Ice Cream 8" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/k1.jpg" alt="Ice Cream 9" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/K2.jpg" alt="Ice Cream 10" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/paan-ice-cream.jpg" alt="Ice Cream 11" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/Cassatta.jpg" alt="Ice Cream 12" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/c2.jpg" alt="Ice Cream 13" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/G1.jpg" alt="Ice Cream 14" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/c3.jpg" alt="Ice Cream 15" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/c6.jpg" alt="Ice Cream 16" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/tender-coconut.jpg" alt="Ice Cream 17" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/c5.jpg" alt="Ice Cream 18" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/v1.jpg" alt="Ice Cream 19" className="gallery-image img-fluid" />
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="gallery-item">
          <img src="https://www.maharajaicecream.com/img/strawberry.jpg" alt="Ice Cream 20" className="gallery-image img-fluid" />
        </Col>


      </Row>
    </Container>
  );
};

export default Gallery;
