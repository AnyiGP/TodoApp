import { SaveCategory } from "../Pages";

export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: Date;
};

export type Category = {
  id: string;
  name: string;
};

export type Task = {
  id: string;
  title: string;
  date: Date;
  category: Category;
  description: string;
};

// //para hacer un post le tengo uqe pasar un segundo param, creo un objeto

// const options = {
//     method: "POST",
//     body: JSON.stringify(SaveCategory)
// }

// fetch("https://todoapp-6c29d-default-rtdb.firebaseio.com/categories.json", options)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })

// //para hacer un post le tengo uqe pasar un segundo param

// //cuando no le paso un metodo por defecto siempre hace un get

// //actualizar datos de la api
// //put registro completo
// //path registros individuales
