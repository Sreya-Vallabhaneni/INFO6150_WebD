import React from "react";
//import image from './Images/Travel.jfif';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import image from "../Jobs/image.jpeg";
import image1 from "../Jobs/image1.jpeg";
import image2 from "../Jobs/image4.jpeg";
import image3 from "../Jobs/image2.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Aboutus from "../Aboutus/Aboutus1.js";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Jobs() {
  return (
    <>
      <Navbar bg="info">
        <Container>
          <Navbar.Brand class="nav1">
            <Link to="/Home" class="nav1">
              Home
            </Link>{" "}
            {"   "}
            <Link to="/Aboutus" class="nav1">
              About
            </Link>
            {"   "}
            <Link to="/Jobs" class="nav1">
              Jobs
            </Link>
            {"   "}
            <Link to="/Contact" class="nav1">
              Contact
            </Link>
            {"   "}
            <Link to="/" class="nav1">
              Logout
            </Link>
            {"   "}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Jobs" element={<Jobs />}></Route>
      </Routes>
      <Row xs={1} md={2} className="g-6">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>Hotel General Manager</Card.Title>
                <Card.Text>
                  The general manager is responsible for overseeing all aspects
                  of the hotel's operations, including managing staff, setting
                  budgets, developing marketing strategies, and ensuring guest
                  satisfaction.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" id="Jobsimage1" src={image1} />
              <Card.Body>
                <Card.Title>Food and Beverage Manager</Card.Title>
                <Card.Text>
                  The food and beverage manager is responsible for overseeing
                  the hotel's food and beverage operations, including managing
                  the kitchen and restaurant staff, ensuring quality service and
                  food, managing inventory and budgets, and maintaining food
                  safety standards.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" id="Jobsimage3" src={image3} />
              <Card.Body>
                <Card.Title>Concierge</Card.Title>
                <Card.Text>
                  The concierge is responsible for assisting guests with travel
                  arrangements, providing recommendations for local attractions
                  and restaurants, and arranging transportation services. They
                  also handle guest inquiries and complaints and ensure guest
                  satisfaction.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Housekeeping Staff</Card.Title>
                <Card.Text>
                  Housekeeping staff is responsible for maintaining the
                  cleanliness and tidiness of the guest rooms, common areas, and
                  other hotel facilities. They clean and organize guest rooms,
                  change bed linen, replenish toiletries, and ensure all areas
                  are properly stocked.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div class="navbar1">
        <section id="section">
          <br></br>
          <center>To book-Contact</center>
          <center>Call: +1 617-242-9000</center>
          <center>Visit: Bunker Hill, Boston, MA</center>
          <center>Email Id:customerservice@marriot.us</center>
        </section>
        <br></br>
      </div>
    </>
  );
}

export default Jobs;
