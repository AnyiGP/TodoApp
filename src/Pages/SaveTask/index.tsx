// import { FC } from "react";
// import MyLayout from "../../Components/Layout";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { taskService } from "../../Servicies";
import NavBar from "../../Components/Layout/Nav";
import { Categories } from "../Categories";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const SaveTask = () => {
  //usamos un hook que nos da RRD, para traer param y compretar la url, puedo ir a buscar esos datos a la base de datos para luego hacer algo con ese user

  const { taskId } = useParams();

  //armo un estado y le agrego un hook que tengo que importa arriba useState
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState<Date>(new Date());

  const [taskCategory, setTaskCategory] = useState("");
  //preguntar si category tiene que cargar el select con las categorias que vamos generando

  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  const task = {
    title: taskTitle,
    date: taskDate,
    category: taskCategory,
    description: taskDescription,
    status: taskStatus,
  };

  const SaveTask = async (e: any) => {
    e.preventDefault();

    // taskService.add(task, Categories);
    // taskService.add(task);
    ////////////////////////////////////

    // const rta = await taskService.add(task);
    // if (rta) {
    //   setTaskTitle("");
    //   // setTaskDate(""); //esto vacia el input cuando se carga
    //   setTaskCategory("")
    //   setTaskDescription("")
    //   setTaskStatus("")
    // } else {
    //   setIfError(true);
    // }
  };

  return (
    <>
      <NavBar />
      <h1>Nueva Tarea</h1>
      <form onSubmit={SaveTask}>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            placeholder="Nombre"
            type="text"
            name="title"
            id="task-title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          
          <Form.Control
            className="me-auto"
            placeholder="Fecha"
            type="date"
            name="date"
            id="task-date"
            value={taskDate.toString()}
            onChange={(e) => setTaskDate(new Date(e.target.value))}
          />

          <Form.Select aria-label="Categorias">
            <option>Categorias</option>
            <option value={taskCategory}>One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Form.Control
            className="me-auto"
            placeholder="Descripción"
            type="text"
            name="description"
            id="task-description"
            value={taskDescription.toString()}
            onChange={(e) => setTaskDescription(e.target.value)}
          />

          <Form.Control
            className="me-auto"
            placeholder="Status"
            type="check"
            name="status"
            id="task-status"
            value={taskStatus.toString()}
            onChange={(e) => setTaskStatus(e.target.value)}
          />

          <Button type="submit" variant="secondary" className="btn btn-primary">
            Agregar
          </Button>
          {/* {ifError && (
            <Alert variant="danger">
              <Alert.Heading>Error!</Alert.Heading>
            </Alert>
          )} */}
        </Stack>
      </form>
    </>
  );
  };

export { SaveTask };
