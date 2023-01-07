import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

////////////////
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SaveCategory from "./Pages/SaveCategory";
import AddTask from "./Pages/AddTask";
import Categories from "./Pages/Categories";
//
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import Tasks from "./Pages/Tasks";
import Login from "./Pages/Login";
import Users from "./Pages/Users";

import "bootstrap/dist/css/bootstrap.min.css";
import { SaveUser } from "./Pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="Dashboard/" element={<Dashboard />}></Route>

        {/* <Route path="Categories/">
          <Route index element={<Categories />} />
          <Route path="save/" element={<AddCategory />}></Route>
        </Route> */}

        {/* <Route path="Categories/">
          <Route index element={<Categories />} />
          <Route path="save" element={<SaveCategory />}></Route>
          <Route path="save/:categoryId" element={<SaveCategory />}></Route>
        </Route> */}

        <Route path="Categories/" element={<Categories />}></Route>

        <Route path="SaveCategory/" element={<SaveCategory />}></Route>

        {/* <Route path="Task/" element={<Tasks />}>
          <Route path="Task/save/:taskId" element={<SaveTask />}></Route>
        </Route> */}

        {/* <Route path="Task/add" element={<AddTask />}></Route>
         */}

        <Route path="Tasks/" element={<Tasks />}></Route>

        <Route path="AddTask/" element={<AddTask />}></Route>

        <Route path="Profile/" element={<Profile />}></Route>

        <Route path="SignUp/" element={<SignUp />}></Route>

        <Route path="Login/" element={<Login />}></Route>

        <Route path="Users/">
          <Route index element={<Users />} />
          <Route path="save" element={<SaveUser />}></Route>
          <Route path="save/:userId" element={<SaveUser />}></Route>
        </Route>

        <Route path="Users/">
          <Route index element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
