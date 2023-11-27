//import React and React bootstrap
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

//import container, nav, navbar and navdropdown from react-boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


//import row and col components from react-boostrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import button, card  and form components from react boostrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


function App() {
  return (
    //create a React fragment
    <>                    
      <div className="App">
       {/* create navbar */}
              <Navbar expand="lg" className="bg-primary p-4 text-light mb-2 mb-lg-0" style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px"}}>
                  <Container>
                        <Navbar.Brand href="#home" className="h1 text-light" style={{fontSize:"160%", fontWeight:"bold"}}>GomySHOP</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="me-auto text-light">
                            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                            <Nav.Link href="#produts" className="text-light">Produts</Nav.Link>
                            <Nav.Link href="#help" className="text-light">Help</Nav.Link>
                            <Nav.Link href="#aboutUs" className="text-light">About us</Nav.Link>
                          </Nav>
                          <Form className="d-flex">
                          <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            style={{borderRadius:"0px"}}
                          />
                        <Button variant="outline-light" style={{borderRadius:"0px"}}>Search</Button>
                        </Form>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>



{/* card section */}
              <Container  className="mt-5">
                  <Row>
                    <Col xs>
                          <Card className="p-4" style={{ width: '20rem', boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px"}}>
                          <Card.Img variant="top" src="product1.jpg" />
                          <Card.Body style={{height:"235px"}}>
                          <Card.Title>Oraimo FreePods 4 </Card.Title>
                          <Card.Text>
                          Oraimo FreePods 4 True Wireless Stereo Earbuds + Free OCW-U65S Charger. - ₦ 30,999
                          </Card.Text>
                          <Button variant="primary" style={{borderRadius:"0px"}}>Buy Device</Button>
                          </Card.Body>
                          </Card>
                    </Col>

                    <Col xs>
                          <Card className="p-4" style={{ width: '20rem', boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px" }}>
                          <Card.Img variant="top" src="product5.jpg" />
                          <Card.Body style={{height:"235px"}}>
                          <Card.Title>Ace Elec WL82 Bluetooth 5.0 Stereo wrist watch</Card.Title>
                          <Card.Text>
                          Ace Elec WL82 Bluetooth 5.0 Stereo wrist watch - ₦ 300,999
                          </Card.Text>
                          <Button variant="primary" style={{borderRadius:"0px"}}>Buy Device</Button>
                          </Card.Body>
                          </Card>
                    </Col>

                    <Col xs>
                    <Card className="p-4" style={{ width: '20rem', boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px"}}>
                          <Card.Img variant="top" src="product3.jpg" />
                          <Card.Body style={{height:"237px"}}>
                          <Card.Title>Tecno H3 Wireless Bluetooth Earbuds</Card.Title>
                          <Card.Text>
                          Tecno H3 Wireless Bluetooth Earbuds
                          </Card.Text>
                          <Button variant="primary" style={{borderRadius:"0px"}}>Buy Device</Button>
                          </Card.Body>
                          </Card>
                    </Col>
                  </Row>
            </Container>
      </div>
      <div className="bg-primary text-light text-center" style={{height:"70px", marginTop:"70px", paddingTop:"20px"}}>Copyright @ gomySHOP 2023</div>
    </>
  );
}

export default App;