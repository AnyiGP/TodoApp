import { Category } from "../../types";
import { URL_BASE } from "../../Constantes"
import { Type } from "typescript";
import { mapToArray } from "../../helpers/mapToArray";


const getAll = async () => {
    const response = await fetch(`${URL_BASE}/categories.json`)

    const data = await response.json()

    return mapToArray<Category>(data)
};

const get = async (id: string) => {
    const response = await fetch(`${URL_BASE}/categories/${id}.json`);

    const data = await response.json()

    return data
};

// Omit es un utility types, para omitir pedir el id y que no me tire error. Partial es otro utility type

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

//udate, delete/remove

//puedo entrar como un ebjeto
// categoriesService.getAll()

// export { categoriesService };
