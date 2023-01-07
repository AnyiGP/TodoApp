import { Category } from "../../types";
import { URL_BASE } from "../../Constantes"
import { Type } from "typescript";

const getAll = () => {};

const get = (id: string) => {};

type AddPayload = Omit<Category, "id">

const add = async (category: AddPayload) => {
    const options = {
        method: "POST",
        body: JSON.stringify(category) 
    }
    //le pongo el end point que yo quiero es lo que se va a mostrar  
    const response = await fetch(`${URL_BASE}/categories.json`, options)

    const data = await response.json()

    console.log(data)

};

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
