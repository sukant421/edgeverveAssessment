import React from "react";
import SubNav from "./SubNav";
import CountWidget from "./CountWidget";
import { Col, Row, TabContent } from "reactstrap";
import ProgressComponent from "./ProgressComponent";
import TableComponent from "./TableComponent";
import InnerNav from "../innerComponent/InnerNav";
import InnerComponent from "../innerComponent/InnerComponent";

export default function MainContent() {
  return (
    <div
      style={{
        backgroundColor: "rgb(227 232 238)",
        height: "max-content",
        overflow: "scroll",
        paddingBottom: "100px",
      }}
    >
      <SubNav />
      <hr />
      <Row style={{ marginInline: "4vh" }} className="pt-2 d-flex">
        <Col md={5}>
          <div className="pt-2 d-flex">
            <CountWidget count={200} title="Intents" />
            <CountWidget count={200} title="Intents" />
            <CountWidget count={200} title="Intents" />
            <CountWidget count={200} title="Intents" />
          </div>
        </Col>
        <Col md={4}>
          <div className="pt-2">
            <ProgressComponent />
          </div>
        </Col>
        <Col md={3}>
          <div className="pt-2">
            <TableComponent />
          </div>
        </Col>
      </Row>
      <Row style={{ marginInline: "4vh" }}>
        <InnerComponent />
      </Row>
    </div>
  );
}
