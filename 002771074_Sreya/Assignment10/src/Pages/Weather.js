import React, { useEffect, useState } from "react";
import HandleIf from "./HandleIf";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import "./weather.css";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const geoloc =
  "http://api.openweathermap.org/geo/1.0/direct?q=Boston&limit=5&appid=3f7a149e7d70d89fd54134a2d9addeb6";

const baseURL =
  "http://api.openweathermap.org/data/2.5/forecast?lat=42.3554334&lon=-71.060511&appid=3f7a149e7d70d89fd54134a2d9addeb6&units=metric";
var count = 0;
function Weather() {
  //API Call to fetch data
  const [data, setData] = useState();
  const [date, setDate] = useState();
  const [list, setList] = useState();
  const [hightemp, setHighTemp] = useState();
  const [lat, setLat] = useState(); //42.3554334
  const [lon, setLon] = useState(); //-71.060511

  const current = new Date();
  function getNameofDay(d) {
    switch (d) {
      case 0:
        return "Sunday";
        break;
      case 1:
        return "Monday";
        break;
      case 2:
        return "Tuesday";
        break;
      case 3:
        return "Wednesday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
        break;
      case 6:
        return "Saturday";
    }
    return;
  }

  useEffect(() => {
    console.log("How many time sis this printed");
    const getData = async () => {
      await axios.get(baseURL).then((response) => {
        //console.log(response.data);

        // setList(response.data.list);
        //=================================================================================
        //// count = count + 1;
        console.log(count);

        var ele_dt = new Date(response.data.list[0].dt_txt);
        var b = [];
        b.push(response.data.list[0]);
        response.data.list[0].day = getNameofDay(ele_dt.getDay());
        var min = 100;
        var max = -100;
        var k = 0;
        // console.log(ele_dt.getDay());
        b[0].day = getNameofDay(ele_dt.getDay());
        response.data.list.forEach((element) => {
          var dt = new Date(element.dt_txt);
          element.day = getNameofDay(dt.getDay());
          if (
            dt.getDate() === ele_dt.getDate() &&
            dt.getMonth() === ele_dt.getMonth() &&
            dt.getFullYear() === ele_dt.getFullYear()
          ) {
            if (min > element.main.temp_min) {
              min = element.main.temp_min;
              b[k].main.temp_min = min;
            }
            if (max < element.main.temp_max) {
              max = element.main.temp_max;
              b[k].main.temp_max = max;
            }
          } else {
            b.push(element);
            ele_dt = dt;
            k++;

            min = 100;
            max = -100;
          }
        });
        setList(response.data.list);
        setData(b);
        //==========================================================================================
      });
    };

    getData();
  }, []);

  console.log("Count is " + count);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <section style={{ backgroundColor: "#f5f6f7" }}>
        <MDBContainer>
          <h2>Weather Forecast</h2>
          <MDBRow className="justify-content-center align-items-center    ">
            {data.map(
              (
                element // Card UI Implementation here
              ) => (
                <MDBCol md="10" lg="8" xl="4">
                  <Card style={{ margin: "20px", width: "17rem" }}>
                    <HandleIf data={element} />

                    <Card.Body>
                      <Card.Title>{element.weather[0].main}</Card.Title>
                      <Card.Title>{element.day}</Card.Title>
                      <Card.Text>
                        <p>
                          Date : {element.dt_txt.substring(0, 10)} <br />
                          Low Temp:<b> {element.main.temp_min}°C </b>
                          <br />
                          High Temp:<b> {element.main.temp_max} °C </b>
                          <br />
                          Feels Like:<b> {element.main.feels_like} °C </b>
                          <br />
                          {/* Time : {element.dt_txt.substring(10,19)} */}
                        </p>
                      </Card.Text>

                      <Link to={element.day} state={list}>
                        <Button variant="primary">Go here</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </MDBCol>
              )
            )}
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default Weather;
