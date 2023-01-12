import { FC } from "react"
import Nav from "react-bootstrap/Nav";

import {NavLink} from 'react-router-dom'
//importo navlink para barras de navegaci'on


const NavBar: FC = () => {
  return (
       <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/login">Login</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/saveCategory">SaveCategory</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/saveTask">SaveTask</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/categories">Categories</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/profile">Profile</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/signUp">SignUp</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/tasks">Tasks</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/users">Users</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/users/save">saveUsers</NavLink>
          </Nav.Item>

{/* 
       <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/AddCategory">AddCategory</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/AddTask">AddTask</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Categories">Categories</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/SignUp">SignUp</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Task">Task</Nav.Link>
          </Nav.Item>
           */}
{/*       
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
         
  );
}

export default NavBar;
