import React from 'react';
import '../Icecream/icecream.css';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, CardImg } from 'reactstrap';

const IceCreamCard = ({ imgSrc, title, description }) => {
  return (
    <Card>

      <CardImg top width="100%" src={imgSrc} alt={title} style={{ height: "140px", width: "170px" }} className="menu-images" />

      <CardBody className="menu-body">
        <CardTitle className="menu-title" tag="h5">{title}</CardTitle>
        <CardText className="menu-description">{description}</CardText>
        <Button color="primary" className="menu-button">Book Order</Button>
      </CardBody>
    </Card>
  );
};

const IceCreamGallery = () => {
  return (
    <Container fluid className="gallery-container">
      <Row className="menu-items">
        <h1 className="our-menu">OUR MENU</h1>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/abu-gatta.jpg"
            title="ABU GATTA"
            description="Abu Gatta is prepared by highly experienced professionals with fresh ingredients such as milk, milk solid, butter, Stabilizers and emulsifiers. Our rich and refreshing ice creams are with numerous eye catching textures. Abu gatta is deliciously creamy and one of a kind."
          />
        </Col>
        <br></br>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/CUSTARD-APPLE.jpg"
            title="CUSTARD APPLE"
            description="Ice cream is nice but fruit and ice cream is one level up. Sitaphal (Custard Apple) is a lovely, exotic fruit that is common in India. We love the grainy texture it brings to the ice cream. The real natural pulp makes it away in texture."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/CHIKU.jpg"
            title="CHIKU"
            description="Chiku being our favourite fruit and ice cream being our favourite dessert,this combination is surely going to satisfy our taste buds."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12 " className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/paan.jpg"
            title="PAAN"
            description="We like to have paan as a refreshment post dinner,purely out of love,we have introduced paan flavored ice cream too.with similar ingredients included in the ice cream you will experience the exact taste of betel leaves too."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12 " className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/CHOCO-CHIPS.jpg"
            title="CHOCO CHIPS"
            description="Chocolate,long considered the food of love,choco chip ice cream is a perfect combination of pure.sweet cream,fine cocoa and choco chips.truely a decadent ice cream experirnce."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/CHOCO-VANILLA.jpg"
            title="CHOCO VANNILA"
            description="Vannila being the top selling ice cream worldwide,we planned to bring together both chocolate and vannila.A creamy delight together chocolate will refresh you throughly."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/BUTTER-SCOTCH-IN-CHENNAI.jpg"
            title="BUTTER SCOTCH"
            description="For when you need just a swirl of classic butterscotch , we have got premium ,rich and creamy butterscotch swirl just for you."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/culkhand-anjeer.jpg"
            title="GULKHAND ANJEER"
            description="Rose petel jam or gulkhand is a sweet preservative that we believe originated from north india.it is very commonly used as a mouth fresher wrapped in paan."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/CASSATA.jpg"
            title="CASSATA"
            description="Cassarta ia an italian version of ice cream in which diffrent flavours of ice cream are arranged in layers."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/HONEY-NUT.jpg"
            title="HONEY NUT"
            description="you will surely love this one.we have added honey coated almond pieces to the ice cream to make it even yummier."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/real-orange.jpg"
            title="REAL ORANGE"
            description="Real orange ice cream is served inside frozen orange ice-cream,which is also unbelievely refreshing.we have removed the pulp and stuffed with mouth watering orange ice cream."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/RAJASTHANI-KULFI.jpg"
            title="RAJASTHANI-KULFI "
            description="Kulfi is a frozen indian dessert brought from the heart of rajasthan. it is made from full cream milk thickend eith choped roasted badam and pista."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/KESAR-PISTA-KULFI.jpg"
            title="KESAR-PISTA-KULFI"
            description="Kesar pista kulfi recipe,gem among frozen indian desserts made from thickend milk garnished with the saffron,roasted badam."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/vanilla.jpg"
            title="VANNILA"
            description="Vannila are frequently used flavours around the world.the most popular ice creams among all ages.."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/strawberry-in-chennai.jpg"
            title="STRAWBERRY"
            description="Strawberry are frequently used flavours around the world.The most popular ice creams among all ages."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/BLACK-CURRENT.jpg"
            title="BLACK-CURRENT"
            description="Black current ice-cream is a rich textured low calorie ice cream.blended with delicious and healthy black current and low fat milk.the most easiest and flavorful ice cream recipe which is best to enjoy."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/matka-kulfi-in-chennai.jpg"
            title="MATKA-KULFI"
            description="This kulfi frozen by placing the moulds inside a large earthenware pot called a matka.it is garnished with pitachios,cardamon,and saffron."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/GOLDEN-CHERRY.jpg"
            title="GOLDEN-CHERRY"
            description="Golden icecream is a multi flavoured icecream with raw pineapple and apple added to it and with the extra toppings of orange jellies and cashew further garnished with wafer biscuits."
          />
        </Col>
        <Col lg="12" md="12" sm="12" xs="12" className="menu-card">
          <IceCreamCard
            imgSrc="https://www.maharajaicecream.com/img/KESAR-PISTA-MALAI-ICE.jpg"
            title="KESAR-PISTA-MALAI"
            description="Kesar pista malal is the indian version of ice cream with the delighted combination of saffron,pistachios and milk cream.you will surely feel the divine of ice cream when it melts."
          />
        </Col>
      </Row>
    </Container>
  );
};

export default IceCreamGallery;
