import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

export default function InputComponent({ labelString = "" }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <FormGroup floating>
        <Input name="email" placeholder={labelString} type="text" />
        <Label style={{ color: "grey" }} for="exampleEmail">
          {labelString}
        </Label>
      </FormGroup>
    </div>
  );
}
