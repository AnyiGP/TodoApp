import { FC } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";

const NavBar: FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto" defaultActiveKey="/home">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/categories/save">SaveCategory</Nav.Link>
          <Nav.Link href="/saveTask">SaveTask</Nav.Link>
          <Nav.Link href="/categories">Categories</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/signUp">SignUp</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/users/save">saveUsers</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
