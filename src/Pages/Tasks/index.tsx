import { FC, useEffect, useState } from "react";
import MyLayout from "../../Components/Layout";
import NavBar from "../../Components/Layout/Nav";
import Table from "react-bootstrap/Table";
import { Category } from "../../types";
import Button from "react-bootstrap/Button";
import { taskService } from "../../Servicies";
import { Task } from "../../types";

const Tasks: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const traerTareas = async () => {
    const rta = await taskService.getAll();
    setTasks(rta);
  };

  if (!tasks.length) traerTareas();

  const borrarTarea = async (id: string) => {
    await taskService.remove(id);
    traerTareas();
  };

  return (
    <>
      <NavBar />
      <div className="tasks">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <td colSpan={6}>Tareas</td>
            </tr>
            <tr>
              <th>ID</th>
              <th>Títutlo</th>
              <th>Fecha</th>
              <th>Categoria</th>
              <th>Descripción</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((elem) => {
              return (
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.title}</td>
                  {/* <td>{elem.date}</td>
                  <td>{elem.category}</td> */}
                  <td>{elem.description}</td>
                  <td>{elem.status}</td>
                  <td>
                    <Button
                      variant="secondary"
                      className="btn"
                      onClick={() => borrarTarea(elem.id)}
                    >
                      Borrar
                    </Button>{" "}
                    {/* /cuando necesita esperar el evento de un usuario el onClick lleva una arrow fx () => , espera a que alguien haga click/ */}
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

export { Tasks };
