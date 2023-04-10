import React, { Component } from "react";
import Cloudy from "./Cloudy";
import Rainy from "./Rainy";
import Snowy from "./Snowy";
import Sunny from "./Sunny";

export default class HandleIf extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    // console.log(this.props.data.type);
    switch (this.props.data.weather[0].main) {
      case "Clear":
        return <Sunny />;
        break;
      case "Clouds":
        return <Cloudy />;
        break;
      case "Rain":
        return <Rainy />;
        break;
      case "Snow":
        return <Snowy />;
        break;
    }

    return <div></div>;
  }
}
