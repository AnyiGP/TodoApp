import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//provider envuelve los bloques de codigo donde necesitamos usar esos dato, entonces vamos a meter todos los datos que queremos compartir, como meter todas las pag en una bolsa, lo podemos hacer en el index principal en vez de la app

// import { AddCategory, AddTask } from "./Pages"
//////////////////////////////////////////////
// import SaveCategory from "./Pages/SaveCategory";
// import AddTask from "./Pages/AddTask";
// import Categories from "./Pages/Categories";
// import Dashboard from "./Pages/Dashboard";
// import Profile from "./Pages/Profile";
// import SignUp from "./Pages/SignUp";
// import Tasks from "./Pages/Tasks";
// import Login from "./Pages/Login";
/////////////////////////////////////////////////////

import { SaveUser, Dashboard, Profile, SignUp, Tasks, Login, Users, SaveCategory, SaveTask, Categories, Error404
} from "./Pages";


import Header from "./Components/Layout/Header";
import Nav from "./Components/Layout/Nav";
import Main from "./Components/Layout/Main";
import Footer from "./Components/Layout/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import MyLayout from "./Components/Layout";

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
