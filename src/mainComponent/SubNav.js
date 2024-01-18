import React from "react";
import { ArrowLeftShort } from "react-bootstrap-icons";
import { Col, Row, Badge, Button } from "reactstrap";

export default function SubNav() {
  return (
    <div style={{ height: "30px" }}>
      <Row>
        <Col md={1}>
          <ArrowLeftShort size={45} />
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <div>
            Vendor Contracts {`${">"}`}
            <strong>Fixed Price Contracts – English</strong>
          </div>
        </Col>
        <Col md={2} className="d-flex align-items-center">
          <div>
            <Badge color="success" outline pill>
              Assigned
            </Badge>
          </div>
        </Col>
        <Col md={5} className="align-items-right justify-content-center">
          <Row>
            <Col md={8}>{""}</Col>
            <Col md={4}>
              <div
                className="d-flex align-items-center justify-content-center p-1"
                style={{}}
              >
                <Button
                  className="m-1"
                  size="sm"
                  style={{ width: "50vw", color: "black" }}
                  outline
                  color="secondary"
                >
                  Cancel
                </Button>
                <Button
                  style={{ width: "50vw " }}
                  size="sm"
                  className="m-1"
                  color="primary"
                >
                  Save
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
