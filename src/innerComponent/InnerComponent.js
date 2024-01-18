import React from "react";
import InnerNav from "./InnerNav";
import FormComponent from "./FormComponent";

export default function InnerComponent() {
  return (
    <>
      <div style={{ height: "50px" }} className="mt-4 mb-2">
        <InnerNav />
      </div>
      <div>
        <FormComponent formLabel="Basic Information" />
        <FormComponent
          formLabel="Parameters"
          showCheck={true}
          ShowMoreFields={true}
        />
      </div>
    </>
  );
}
