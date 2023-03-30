import React from "react";
import Card from "react-bootstrap/Card";
import image4 from "../Aboutus/image4.webp";
import image3 from "../Aboutus/image3.webp";
import image2 from "../Aboutus/image2.webp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Login from "../Login/Login";

function Aboutus() {
  let cardItems = [
    {
      description:
        "2 BEDROOM SUITE- Bedroom 1: 1 King, Bedroom 2: 1 Queen(s), Sofa bed, Bathrooms: 2, Microwave (full size), 700sqft/63sqm, Dining area, Separate living room, Wireless internet, complimentary, Wired internet, complimentary, Coffee/tea maker, 50in/127cm LED TV",
      image: image2,
      cardColor: "Primary",
    },
    {
      description:
        " 1 BEDROOM SUITE- 1 King, Sofa bed, Microwave (full size), 400sqft/36sqm, Dining area, Separate living room, Wireless internet, complimentary, Wired internet, complimentary, Coffee/tea maker, 50in/127cm LED TV",
      image: image3,
      cardColor: "Success",
    },
    {
      description:
        " STUDIO- 1 Queen(s), Sofa bed, Full kitchen, Microwave, 356sqft/32sqm, Living/sitting area, Dining area, Wireless internet, complimentary, Wired internet, complimentary, Coffee/tea maker, 22in/56cm TV",
      image: image4,
      cardColor: "Warning",
    },
  ];

  let cardDom = cardItems.map((e, i) => {
    return (
      <Card
        bg={e.cardColor.toLowerCase()}
        key={e + i}
        text={e.cardColor.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "100%" }}
        className="mb-2"
      >
        <br></br>
        <Card.Img variant="top" src={e.image} />
        <Card.Body>
          <Card.Text>{e.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
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

      {cardDom}

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

export default Aboutus;
