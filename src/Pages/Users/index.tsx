import { FC } from "react";
import MyLayout from "../../Components/Layout";
import NavBar from "../../Components/Layout/Nav";

const Users: FC = () => {
    return (
      <>
      <NavBar />
      <div className="users">
        
        <h2>Users</h2>
        
        </div>
        </>
    );
  }
  
  export default Users
  export { Users }