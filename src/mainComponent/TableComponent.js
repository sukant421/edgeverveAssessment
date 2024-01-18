import React from "react";
import { Table } from "reactstrap";

export default function TableComponent() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "20vh",
        overflow: "auto",
      }}
    >
      <Table borderless>
        <thead>
          <tr>
            <th>Assignee</th>
            <th>Docs</th>
            <th>Sentences</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John.Doe</td>
            <td>6</td>
            <td>138</td>
          </tr>
          <tr>
            <td>Michelle R.</td>
            <td>4</td>
            <td>74</td>
          </tr>
          <tr>
            <td>Greg Stevert</td>
            <td>2</td>
            <td>20</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
