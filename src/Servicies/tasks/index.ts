import { Category, Task } from "../../types";

const getAll = () => {};

const get = (id: string) => {};

const add = (category: Category) => {};

// const categoriesService = {
//   getAll: getAll,
//   get: get,
//   add: add,
// };
//cuando la propiedad tiene el mismo nombre de la variable que le da valor no es necesario ponerlo

export const categoriesService = { getAll, get, add };

//puedo entrar como un ebjeto
categoriesService.getAll()

// export { categoriesService };
