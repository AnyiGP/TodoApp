import { Category, Task } from "../../types";
// import { Task } from "../../types";

import { URL_BASE } from "../../Constantes"


const getAll = () => {};

const get = (id: string) => {};

type AddPayload = Omit<Task, "id">
//2.33.55


const add = async (task: AddPayload) => {
    const options = {
        method: "POST",
        body: JSON.stringify(task) 
    }
    //le pongo el end point que yo quiero es lo que se va a mostrar  
    const response = await fetch(`${URL_BASE}/task.json`, options)

    const data = await response.json()

    console.log(data)

};

// const categoriesService = {
//   getAll: getAll,
//   get: get,
//   add: add,
// };
//cuando la propiedad tiene el mismo nombre de la variable que le da valor no es necesario ponerlo

export const taskService = { getAll, get, add };

//puedo entrar como un ebjeto
// taskService.getAll()

// export { taskService };
