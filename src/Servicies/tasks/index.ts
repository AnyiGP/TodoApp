import { Category, Task } from "../../types";
// import { Task } from "../../types";

import { URL_BASE } from "../../Constantes";
import { mapToArray } from "../../helpers/mapToArray";

const getAll = async () => {
  const response = await fetch(`${URL_BASE}/task.json`);

  const data = await response.json();

  return mapToArray<Task>(data);
};

const get = async (id: string) => {
  const response = await fetch(`${URL_BASE}/task/${id}.json`);

  const data = await response.json();
  return data;
};

type AddPayload = Omit<Task, "id">;

const add = async (task: AddPayload) => {
  const options = {
    method: "POST",
    body: JSON.stringify(task),
  };
  //le pongo el end point que yo quiero es lo que se va a mostrar
  const response = await fetch(`${URL_BASE}/task.json`, options);

  const data = await response.json();

  console.log(data);
  if (data.name) {
    return true;
  } else {
    return false;
  }
};

const update = (category: Partial<Task>) => {};

const remove = async (id: string) => {
  const options = {
    method: "DELETE",
  };

  await fetch(`${URL_BASE}/task/${id}.json`, options);
};


// const categoriesService = {
//   getAll: getAll,
//   get: get,
//   add: add,
// };
//cuando la propiedad tiene el mismo nombre de la variable que le da valor no es necesario ponerlo

export const taskService = { getAll, get, add, update, remove };

//puedo entrar como un ebjeto
// taskService.getAll()

// export { taskService };
