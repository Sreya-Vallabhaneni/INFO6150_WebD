import React from "react";
import image from "../Home/Home1.jpeg";
import image2 from "../Home/Home2.jpeg";
import Card from "react-bootstrap/Card";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Aboutus from "../Aboutus/Aboutus1.js";
import Jobs from "../Jobs/Jobs";
import Contact from "../Contact/Contact";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Home() {
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
      <Card id="card" bg="info">
        <Card.Img class="homeimage" variant="top" src={image} />
        <Card.Body id="travel">
          <Card.Text>
            <b>
              Boston's rich history is right outside your door when you stay at
              the Residence Inn by Marriott Boston Harbor on Tudor Wharf. Our
              all-suite hotel near downtown Boston is conveniently located and
              within walking distance of the historic North End, Boston Harbor
              and TD Banknorth Garden.
            </b>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" class="homeimage" src={image2} />
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

export default Home;
