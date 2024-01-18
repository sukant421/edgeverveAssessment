import React from "react";
import { Progress } from "reactstrap";

export default function ProgressComponent() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "20vh",
      }}
      className="p-2"
    >
      <div>Document Status</div>
      <Progress multi style={{ borderRadius: "none", marginTop: "4vh" }}>
        <Progress bar value="15" />
        <Progress bar color="success" value="25" />
        <Progress bar color="info" value="25" />
        <Progress bar color="warning" value="20" />
        <Progress bar color="danger" value="15" />
      </Progress>
      <div className="d-flex justify-content-center align-items-center pt-2">
        <div className="p-2">
          <div
            style={{ height: "10px", width: "10px", backgroundColor: "red" }}
          ></div>
          <div>UnAssigned</div>
        </div>
        <div className="p-2">
          <div
            style={{ height: "10px", width: "10px", backgroundColor: "green" }}
          ></div>
          <div>Assigned</div>
        </div>
        <div className="p-2">
          <div
            style={{ height: "10px", width: "10px", backgroundColor: "cyan" }}
          ></div>
          <div>Tagged</div>
        </div>
        <div className="p-2">
          <div
            style={{ height: "10px", width: "10px", backgroundColor: "Orange" }}
          ></div>
          <div>Trained</div>
        </div>
      </div>
    </div>
  );
}
