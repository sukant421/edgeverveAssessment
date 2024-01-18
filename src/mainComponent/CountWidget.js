import React from "react";

export default function CountWidget({ count = 191, title = "" }) {
  return (
    <div
      style={{
        height: "20vh",
        width: "40vw",
        backgroundColor: "white",
        border: "1px solid lightgray",
        overflow: "hidden",
        paddingInline: "20px",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="align-items-center justify-content-center">
        <div style={{ fontSize: "25px", color: "#608e8e" }}>{count}</div>
        <div>{title}</div>
      </div>
    </div>
  );
}
