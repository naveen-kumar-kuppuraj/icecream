import React from "react";

import { Container, Row, Col } from "reactstrap";
function Home2() {
    return (
        <>


            <div class="col-lg-12">

                <div className="text-center">
                    <p>Welcome To Maharaja Ice Cream</p>

                </div>
            </div>
            <Container>
                <Row>

                    <Col lg="6" md="6" sm="12" xs="12">

                        <img src="https://www.maharajaicecream.com/img/servicesmain.png" alt="main" className="image-home" ></img>
                    </Col>
                    <Col lg="6" md="6" sm="12" xs="12">
                        <div className="creamy">
                            <h3 className="head3">A Creamy Delight That  <br></br>Challenges Your Taste</h3>

                            <p className="head-para"><strong>Maharaja Ice cream </strong>spreads the happiness <strong>across India</strong> to people of all ages. We are known to be beating the heat with refreshing and healthy Fruttare, professing your love with  crunching away all your worries with our <strong>ice cream </strong>feast that brightens your dull day with our <strong>delicious ice cream, sharing sweet victories</strong> with your beloved ones with <strong>Kulfeez or special experience</strong> with frozen treat in your life. <strong>Maharaja Ice cream</strong> is committed to excellence and zeal in <strong>this field since 2004.</strong> We are known to be dedicated in <strong>manufacturing and marketing</strong> world class quality superior ice cream made with <strong>pure milk and cream.</strong> Our main aim is to always determine in <strong>maintaining integrity and commitment in providing quality and value.</strong> We provide delicious ice cream at reasonable price
                            </p>

                           <a href="/Contact"><button class="button-contact" >Contact Us Today</button></a> 

                        </div>
                    </Col>
                </Row>
            </Container>

        </>

    );

}
export default Home2;