import React from "react";
import { Container, Row, Col } from 'reactstrap';



function Home3() {
  return (
    <>
      <h1 className="text-center">Services</h1>
      <Container className="home-con">
        <Row>
          <Col lg="6" md="6" sm="12" xs="12">
            <img src="https://img.freepik.com/free-vector/pastry-chefs-decorating-big-wedding-birthday-cake_74855-7772.jpg?ga=GA1.1.285793457.1725943740&semt=ais_hybrid" alt="" className="img-fluid" />
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <h2 className="home-title">Birth Days</h2>
            <p className="home-para">Make your birthday celebration unforgettable with Maharaja Ice Cream's exclusive catering service, bringing a fun and delicious ice cream experience right to your venue. Choose from a wide selection of signature flavors, from traditional favorites to unique specialties, and let your guests customize their scoops with a variety of toppings, including fresh fruits, sprinkles, and sauces. We also offer custom ice cream cakes that can be personalized to match your celebration. With a professional team handling everything from setup to service, you can relax and enjoy your party while we take care of the details. Our flexible catering packages are designed to fit any event size and budget, ensuring that every celebration is as special as it deserves to be. Booking is easy—just contact us to create a memorable birthday experience with Maharaja Ice Cream.</p>
          </Col>
        </Row>
      </Container>
      <Container className="home-con">
        <Row>
          <Col lg="6" md="6" sm="12" xs="12">
            <h2 className="home-title">Weddings</h2>
            <p className="home-para">Make your wedding day even sweeter with Maharaja Ice Cream’s wedding catering service, offering a unique and delightful ice cream experience for you and your guests. Choose from our range of premium flavors, from classic favorites to exotic options, all served at a beautifully designed ice cream bar with a variety of toppings and sauces. Whether it’s an elegant reception or a relaxed celebration, our ice cream catering adds a fun and memorable element to your special day. We also offer custom ice cream cakes, making for an unforgettable dessert. Our professional team handles everything—from setup to service and cleanup—allowing you to focus on celebrating. With flexible packages to suit any wedding size, Maharaja Ice Cream brings a delicious and personalized touch to your big day.</p>
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <img src="https://img.freepik.com/free-vector/wedding-ceremony-composition-with-indoor-view-hall-with-guests-having-drinks-table-with-newlyweds-vector-illustration_1284-69216.jpg?ga=GA1.1.285793457.1725943740&semt=ais_hybrid" alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container className="home-con">
        <Row>
          <Col lg="6" md="6" sm="12" xs="12">
            <img src="https://img.freepik.com/free-vector/banquet-room-with-guests-staff-food-drinks-tables-walls-with-bright-pictures-isometric-vector-illustration_1284-30386.jpg?ga=GA1.1.285793457.1725943740&semt=ais_hybrid" alt="" className="img-fluid" />
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <h2 className="home-title">Corporate Events</h2>
            <p className="home-para">Elevate your next corporate event with Maharaja Ice Cream’s catering service, providing a unique and refreshing treat for your team and guests. Whether it's a company celebration, product launch, or team-building event, our premium ice cream selection offers something for everyone, from classic flavors to more adventurous choices. Our customizable ice cream bar, complete with a variety of toppings and sauces, ensures that each guest can create their perfect dessert. With a professional team handling everything from setup to service, we make it easy to add a fun and memorable element to your corporate gathering. Maharaja Ice Cream offers flexible catering packages that can be tailored to suit events of any size, ensuring a seamless and enjoyable experience for all attendees.</p>
          </Col>
        </Row>
      </Container>



    </>
  );
}
export default Home3;