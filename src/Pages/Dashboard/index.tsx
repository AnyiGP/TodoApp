import { FC } from "react";
import MyLayout from "../../Components/Layout";

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


const Dashboard: FC = () => {
  return (
    <div className="dashboard">
      {/* <MyLayout /> */}
      <h1>Dashboard</h1>
    </div>
  );
};

// export default Dashboard;
export {Dashboard};
