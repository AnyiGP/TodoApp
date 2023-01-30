import { FC } from "react";
import { Outlet } from "react-router-dom";
import {Footer} from "./Footer";
import Header from "./Header";
import Main from "./Main";
// import { Main as Layout } from "./Main" //si hago asi, main dejaria de existir y se llamaria layout


// export { Footer, Header, Main, Menu } from ".";

import Nav from "./Nav";

// type Props = {
//   onChangePage: (page: string) => void
// }

// const MyLayout: FC<Props> = ({ onChangePage }) => {
//   // const MyLayout: FC<Props> = ( onChangePage ) => {

///////////////////////////////

const MyLayout: FC = () => {
  // const MyLayout: FC<Props> = ( onChangePage ) => {

  return (
    <div className="MyLayout">
      {/* <Header />
      <NavBar
      // onChangePage={onChangePage}
      />
      <Main />
      <Outlet />

      <Footer /> */}
    </div>
    
  );
};

export default MyLayout;
