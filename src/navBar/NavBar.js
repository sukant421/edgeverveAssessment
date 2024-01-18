import React, { useState } from "react";
import { Navbar, NavbarToggler, Input, Row, Col } from "reactstrap";
import { Search, List, BellFill, PersonCircle } from "react-bootstrap-icons";

function Topbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        backgroundColor: "#404040",
        height: "50px",
      }}
      className="p-2"
    >
      <Row className="d-flex align-items-center jusify-content-center">
        <Col md={8}>
          <List color="white" size={35} />
        </Col>
        <Col md={4}>
          <Row>
            <Col md={2}>
              <Search color="white" size={20} />
            </Col>
            <Col md={6}>
              <Input
                id="exampleSelect"
                name="select"
                size="sm"
                type="select"
                style={{ backgroundColor: "#404040", color: "white" }}
              >
                <option>Choose Project</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </Col>
            <Col md={4}>
              <Row className="d-flex align-items-center jusify-content-center text-right">
                <Col md={6}>
                  <BellFill color="white" size={20} />
                </Col>
                <Col md={6}>
                  <PersonCircle color="white" size={20} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Topbar;

{
  /* <Row>
          <Col sm={6}>
            <NavbarToggler onClick={toggle} />
          </Col>
          <Col md={6}>
            <Row>
              <Search color="white" size={20} />
              <Input
                id="exampleSelect"
                name="select"
                size="sm"
                className="w-25"
                type="select"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </Row>
          </Col>
        </Row> */
}
