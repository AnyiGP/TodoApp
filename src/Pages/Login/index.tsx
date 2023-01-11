import { FC } from "react"
import MyLayout from "../../Components/Layout";

// type Props = {
//   onChangePage: (page: string) => void
// }

// const Login: FC <Props> = ( { onChangePage }) => {
//     return (
//       <div className="login">
//         <MyLayout onChangePage={onChangePage}/>
//         <h1>Login</h1>
//         </div>
//     );
//   }

  
  const Login: FC = () => {
    return (
      <div className="login">
        {/* <MyLayout /> */}
        <h1>Login</h1>
        </div>
    );
  }

  export default Login;
  export {Login};