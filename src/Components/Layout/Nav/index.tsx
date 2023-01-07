import { FC } from "react"
import Nav from "react-bootstrap/Nav";

import {NavLink} from 'react-router-dom'
//importo navlink para barras de navegaci'on


const NavBar: FC = () => {
  return (
       <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Login">Login</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/SaveCategory">SaveCategory</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/AddTask">AddTask</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Categories">Categories</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Profile">Profile</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/SignUp">SignUp</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Task">Task</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Users">Users</NavLink>
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
