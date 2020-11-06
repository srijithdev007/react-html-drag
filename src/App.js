import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  allowDrop = ev => {
    ev.preventDefault();
  };

  drag = ev => {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  drop = ev => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    switch (data) {
      case "shape2":
        document.getElementById("shape2").style.marginLeft = "-222px";
        document.getElementById("shape2").style.marginTop = "15px";
        document.getElementById("shape2").style.position = "absolute";
        break;
      case "textname":
        document.getElementById("textname").disabled = false;
        document.getElementById("textname").style.marginLeft = "-187px";
        document.getElementById("textname").style.position = "absolute";
        document.getElementById("textname").style.marginTop = "80px";
        break;
    }
    ev.target.appendChild(document.getElementById(data));
  };

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
    console.log("inputval", this.state.inputValue);
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col
              xs={6}
              md={6}
              lg={6}
              onDrop={() => this.drop(event)}
              onDragOver={() => this.allowDrop(event)}
            >
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <canvas
                    id="shape1"
                    width="230"
                    height="150"
                    draggable="true"
                    onDragStart={() => this.drag(event)}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <canvas
                    id="shape2"
                    width="50"
                    height="50"
                    draggable="true"
                    onDrop={() => this.drop(event)}
                    onDragStart={() => this.drag(event)}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={12} md={12} lg={12}>
                  <input
                    type="text"
                    id="textname"
                    placeholder="name"
                    name="username"
                    draggable="true"
                    value={this.state.inputValue}
                    onChange={evt => this.updateInputValue(evt)}
                    disabled
                    onDrop={() => this.drop(event)}
                    onDragStart={() => this.drag(event)}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xs={6}
              md={6}
              lg={6}
              className="border-box"
              onDrop={() => this.drop(event)}
              onDragOver={() => this.allowDrop(event)}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
