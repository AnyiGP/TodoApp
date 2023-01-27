import { FC } from "react";
import MyLayout from "../../Components/Layout";
import NavBar from "../../Components/Layout/Nav";

const Tasks: FC = () => {
  return (
    <>
    <NavBar />
      
    <div className="tasks">
      <h1>Tasks</h1>
    </div>
    </>
  );
};

export { Tasks };
