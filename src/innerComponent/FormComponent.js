import React from "react";
import InputComponent from "./InputComponent";
import { Col, Row, Card, FormGroup, Input, Label } from "reactstrap";

export default function FormComponent({
  showCheck = false,
  ShowMoreFields = false,
  formLabel = "",
}) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div>
        <div className="p-2">{formLabel}</div>
        {!showCheck && (
          <div style={{ width: "70vw" }}>
            <Card>
              {showCheck && (
                <Row className="p-2">
                  <Col md={6}>
                    <FormGroup check>
                      <Input type="checkbox" />{" "}
                      <Label check>
                        Auto-suggest Convolutional Neural Network (CNN)
                        Parameters
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup check>
                      <Input type="checkbox" />{" "}
                      <Label check>Append Section Header</Label>
                    </FormGroup>
                  </Col>
                </Row>
              )}
              <Row className="p-2">
                <Col md={6}>
                  <InputComponent labelString="Model Name" />
                </Col>
                <Col md={6}>
                  <InputComponent labelString="Model Descriptiopn" />
                </Col>
              </Row>
            </Card>
          </div>
        )}
        {showCheck && (
          <div>
            <div style={{ width: "70vw" }}>
              <Card>
                {showCheck && (
                  <Row className="p-2">
                    <Col md={6}>
                      <FormGroup check>
                        <Input type="checkbox" />{" "}
                        <Label check>
                          Auto-suggest Convolutional Neural Network (CNN)
                          Parameters
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup check>
                        <Input type="checkbox" />{" "}
                        <Label check>Append Section Header</Label>
                      </FormGroup>
                    </Col>
                  </Row>
                )}
                <Row className="p-2">
                  <Col md={3}>
                    <InputComponent labelString="Input Layer Dimension" />
                  </Col>
                  <Col md={3}>
                    <InputComponent labelString="Validation to Train Ratio (%)" />
                  </Col>
                  <Col md={3}>
                    <InputComponent labelString="Miscellaneous Ratio (%)" />
                  </Col>
                  <Col md={3}>
                    <InputComponent labelString="MLearning Rate" />
                  </Col>
                  <Col md={3}>
                    <InputComponent labelString="Activation Function" />
                  </Col>
                  <Col md={3}>
                    <InputComponent labelString="Model Type" />
                  </Col>
                  <Col md={3}>
                    <InputComponent labelString="Epochs" />
                  </Col>
                  <Col md={3}>
                    <InputComponent labelString="Embedding Dimension" />
                  </Col>
                  <Col md={3}>
                    <InputComponent labelString="Number of Filters" />
                  </Col>
                  <Col md={3}>
                    <InputComponent labelString="Batch Size" />
                  </Col>
                  <Col md={3}>
                    <InputComponent labelString="Drop (Optional)" />
                  </Col>
                  <Col md={3}>
                    <InputComponent labelString="Filter Size" />
                  </Col>
                </Row>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
