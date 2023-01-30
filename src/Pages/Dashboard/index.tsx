import { FC } from "react";
import MyLayout from "../../Components/Layout";
import NavBar from "../../Components/Layout/Nav";
import { Tasks } from "../Tasks";

const Dashboard: FC = () => {
  return (
    <>
    <Tasks />
    <div className="dashboard">
    <h1>Dashboard</h1>
    </div>
    </>
  );
};

// export default Dashboard;
export {Dashboard};

// type Props = {
//   onChangePage: (page: string) => void;
// };

// const Dashboard: FC<Props> = ({ onChangePage }) => {
//   return (
//     <div className="dashboard">
//       <MyLayout onChangePage={onChangePage} />
//       <h1>Dashboard</h1>
//     </div>
//   );
// };
