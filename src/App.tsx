import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//provider envuelve los bloques de codigo donde necesitamos usar esos dato, entonces vamos a meter todos los datos que queremos compartir, como meter todas las pag en una bolsa, lo podemos hacer en el index principal en vez de la app

import {
  SaveUser,
  Dashboard,
  Profile,
  SignUp,
  Tasks,
  Login,
  Users,
  SaveCategory,
  SaveTask,
  Categories,
  Error404,
} from "./Pages";

import Header from "./Components/Layout/Header";
import Nav from "./Components/Layout/Nav";
import Main from "./Components/Layout/Main";
import { Footer } from "./Components/Layout/Footer";
import Button from "react-bootstrap/esm/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import MyLayout from "./Components/Layout";
import { Btn } from "./Components";

//cargamos una ruta, y en base a esa ruta cargamos un componente

function App() {
  return (
    <>
      {/* <MyLayout /> */}
      <Header />
      <Nav
      // onChangePage={onChangePage}
      />
      <Main />
      <Outlet />
      <Button variant="dark">
        Enviar
      </Button>
      <Button variant="primary">Iniciar Sesion</Button>

      <Footer />
    </>

    // <>
    //   <Header />
    //   <Nav />
    //   <Main />
    //   {/* <Main> */}
    //     <Outlet />
    //   {/* </Main> */}
    //   <Footer />
    // </>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/AddCategory" element={<AddCategory />}></Route>
    //     <Route path="/AddTask" element={<AddTask />}></Route>
    //     <Route path="/Categories" element={<Categories />}></Route>
    //     <Route path="/Dashboard" element={<Dashboard />}></Route>
    //     <Route path="/Profile" element={<Profile />}></Route>
    //     <Route path="/SignUp" element={<SignUp />}></Route>
    //     <Route path="/Task" element={<Tasks />}></Route>
    //     <Route path="/Login" element={<Login />}></Route>
    //     <Route path="/" element={<Dashboard />}></Route>

    //     {/* <Login />
    //     <AddCategory />
    //     <AddTask />
    //     <Categories />
    //     <Profile />
    //     <SignUp />
    //     <Tasks />
    //     <Dashboard /> */}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
