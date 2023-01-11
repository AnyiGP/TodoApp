import { FC } from "react";
import MyLayout from "../../Components/Layout";

const Error404: FC = () => {
    return (
      <div className="error404">
        <MyLayout/>
        <h1>Error 404</h1>
        <a href="/dashboard">Home</a>
        </div>
    );
  }
  
  // export default Profile;
  export {Error404}; 