import { FC, useEffect, useState } from "react";
import MyLayout from "../../Components/Layout";
import NavBar from "../../Components/Layout/Nav";
import { userService } from "../../Servicies";
import { User } from "../../types";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const Users: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const traerUsuarios = async () => {
    const rta = await userService.getAll();

    if (!users.length) setUsers(rta);
  };

  useEffect(() => {
    traerUsuarios();
  }, []);

  return (
    <>
      <NavBar />
      <div className="users">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th colSpan={8}>USUARIOS</th>
            </tr>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Lastname</th>
              <th>Birthdate</th>
              <th>email</th>
              <th>password</th>
              <th colSpan={2}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((elem) => {
              return (
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.name}</td>
                  <td>{elem.lastname}</td>
                  {/* <td>{elem.birthdate}</td> */}
                  <td>{}</td>
                  <td>{elem.email}</td>
                  <td>{elem.password}</td>

                  <td>
                    <Button variant="secondary">Borrar</Button>{" "}
                  </td>
                  <td>
                    <Button variant="secondary">Editar</Button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Users;
export { Users };
