// import { FC } from "react";
// import MyLayout from "../../Components/Layout";
import { useState } from "react";
import { categoriesService } from "../../Servicies";

const SaveCategory = () => {
  //armo un estado y le agrego un hook que tengo que importa arriba useState, catName y setCatNme los usamos par controlarlo uqe se va escribiendo en le input, voy a tener los datos setados/actualizados de lo q valla escribiendo en el imput
  const [catName, setCatName] = useState("");
  const [color, setColor] = useState("");

  const category = {
    name: catName,
    color: color
  }
  //armo una funci'on que va a recibir un evento, le pongo un e.default para que no me tire error, este saveCategory es funcion
  const saveCategory = (e: any) => {
    e.preventDefault();
    categoriesService.add(category
      );
  };

  return (
    <>
      <h1>Estoy en Save Category</h1>
      <form onSubmit={saveCategory}>
        <div className="form-group">
          <label htmlFor="">Nombre</label>
          
          {/* color agregar en otro input */}

          <input
            type="text"
            name="name"
            id="name-category"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
          />
          <label htmlFor="color-category">Color</label>
          <input
            type="color"
            name="color"
            color="color"
            id="color-category"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default SaveCategory;
export { SaveCategory };

// const SaveCategory: FC = () => {
//     return (
//       <div className="SaveCategory">
//         <MyLayout/>
//               <h1>Save Category</h1>

//         </div>
//     );
//   }

//   // export default SaveCategory;
//   export {SaveCategory};

// //////////////
// function AddCategory() {
//   return (
//     <div className="addCategory">

//             <h1>Add Category</h1>

//       </div>
//   );
// }

// export default AddCategory;
