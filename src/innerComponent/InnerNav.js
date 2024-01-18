import React from "react";
import { NavItem, NavLink } from "reactstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function InnerNav() {
  return (
    <Navbar
      style={{ height: "50px", borderRadius: "5px" }}
      bg="light"
      data-bs-theme="light"
      className="p-4"
    >
      <Nav variant="underline" pills>
        <NavItem>
          <NavLink active href="#">
            Intents
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Documents</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Statistics</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
