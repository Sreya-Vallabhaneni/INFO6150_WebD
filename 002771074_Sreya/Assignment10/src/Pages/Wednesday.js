import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import Card from "react-bootstrap/Card";
import HandleIf from "./HandleIf";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";

function Wednesday() {
  const location = useLocation();
  const data = location.state;
  var tuesday_data = [];

  data.forEach((element) => {
    if (element.day === "Wednesday") {
      tuesday_data.push(element);
    }
  });

  console.log(data);
  return (
    <div>
      <section style={{ backgroundColor: "#f5f6f7" }}>
        <h2>Wednesday</h2>
        <MDBContainer>
          <MDBRow className="justify-content-center align-items-center    ">
            {tuesday_data.map((element) => (
              <Col sm={3}>
                <Card style={{ margin: "20px", width: "17rem" }}>
                  <HandleIf data={element} />

                  <Card.Body>
                    <Card.Title>{element.weather[0].main}</Card.Title>
                    <Card.Text>
                      <p>
                        Date : {element.dt_txt.substring(0, 10)} <br />
                        Low Temp: {element.main.temp_min}
                        <br />
                        High Temp: {element.main.temp_max} <br />
                        Feels Like: {element.main.feels_like}
                        <br />
                        Time : {element.dt_txt.substring(10, 19)}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

export default Wednesday;
