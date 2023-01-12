// import { FC } from "react";
// import MyLayout from "../../Components/Layout";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { taskService } from "../../Servicies";
// import {Categories} from "../Categories";

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

  const SaveTask = (e: any) => {
    e.preventDefault();
    const task = {
      title: taskTitle,
      date: taskDate,
      category: taskCategory,
      description: taskDescription,
      status: taskStatus,
    };
    // taskService.add(task, Categories);
    // taskService.add(task);
  };

  return (
    <>
      <h1>Estoy en Save Task</h1>
      <form onSubmit={SaveTask}>
        <div className="form-group">
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="title"
            id="task-title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <label htmlFor="date">Fecha de Nacimiento</label>
          <input
            type="date"
            name="date"
            id="date-task"
            value={taskDate.toString()}
            onChange={(e) => setTaskDate(new Date(e.target.value))}
          />

          <label htmlFor="category">Apellido</label>
          {/* <select name="" id="">

          como cargamos el selec con las categorias que va cargando el usuario en firebase

          </select>
           */}
          <input
            type="text"
            name="category"
            id="task-category"
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
          />
          <label htmlFor="description">Descripcion</label>
          <input
            type="text"
            name="descriptionEmail"
            id="task-description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <label htmlFor="status">Status</label>
          <input
            type="check"
            name="status"
            id="task-status"
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
  //   <div>Estoy en save user editando el usuario {userId} </div>;
};

/////////////////////////////////////////
// const SaveTask: FC = () => {
//   return (
//     <div className="saveTask">
//       {/* <MyLayout/> */}
//       <h1>Add Task</h1>
//     </div>
//   );
// };

export { SaveTask };
