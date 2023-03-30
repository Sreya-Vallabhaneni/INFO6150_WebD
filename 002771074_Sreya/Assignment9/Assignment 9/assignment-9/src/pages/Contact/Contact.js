import Card from "react-bootstrap/Card";
import React from "react";
import image from "../Contact/image.avif";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Aboutus from "../Aboutus/Aboutus1.js";
import Jobs from "../Jobs/Jobs";
import Home from "../Home/Home";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Login from "../Login/Login";

function Contact() {
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
      <Card className="bg-dark text-white">
        <Card.Img src={image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title></Card.Title>
          <Card.Text id="contacttext">
            <b>Contact Us</b>
            <br></br>
            <br></br>
            <b>
              Call us to make a reservation or for assistance with existing
              reservations
            </b>
            <br></br>
            <b>Monday-Friday 9:00 AM to 5:00 PM EST</b>
            <br></br>
            <b>Email Id:customerservice@marriot.usa</b>
            <br></br>
            <b>Location: Bunker Hill, Boston, MA</b>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

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

export default Contact;
