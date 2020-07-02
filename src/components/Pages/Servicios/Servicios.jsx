import React, { Component } from "react";
import axios from "axios";
import CardView from "../../Organisms/CardView/CardView";

class Servicios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://my-json-server.typicode.com/CUBOFIG/JSON-React/cursos/")
      .then((resp) => this.setState({ cursos: resp.data }));
  }

  render() {
    const { cursos } = this.state;
    console.log(cursos);
    return <CardView cursos={cursos} />;
  }
}

export default Servicios;
