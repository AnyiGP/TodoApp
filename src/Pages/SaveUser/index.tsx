import { useParams } from "react-router-dom";
import { useState } from "react";
import { userService } from "../../Servicies";

const SaveUser = () => {
  //usamos un hook que nos da RRD, para traer par'ametro y as'i compretar la url, puedo ir a buscar esos datos a la base de datos para luego hacer algo con ese user
  //   const { userId } = useParams();

  //armo un estado y le agrego un hook que tengo que importa arriba useState
  const [catName, setCatName] = useState("");

  const SaveUser = (e: any) => {
    e.preventDefault();
    // userService.add({ name: catName });
  };

  return (
    <>
      <h1>Estoy en Save Usuer</h1>
      <form onSubmit={SaveUser}>
        <div className="form-group">
          <label htmlFor="">Nombre</label>
          {/* color agregar en otro input */}
          <input
            type="text"
            name="name"
            id="name-user"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
          />
          {/* daberia hacer los otros input con lastname, email, pasword, birthdate */}
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            name="name"
            id="name-category"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
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

export { SaveUser };
