// import { FC } from "react";
// import MyLayout from "../../Components/Layout";
import {useState} from "react"
import { categoriesService } from "../../Servicies";

const SaveCategory = () => {
  //armo un estado y le agrego un hook que tengo que importa arriba useState
  const [catName, setCatName] = useState("");

  //armo una funci'on que va a recibir un evento, le pongo un e.default para que no me tire error
  const saveCategory = (e: any) => {
    e.preventDefault();
    categoriesService.add(
      {name: catName}
    )
  };

  return (
    // <div className="SaveCategory">
    //   <h1>Save Category</h1>
    // </div>

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
          onChange={e => setCatName(e.target.value)} />
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
