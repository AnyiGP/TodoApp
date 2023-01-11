import { useParams } from "react-router-dom";
import { useState } from "react";
import { userService } from "../../Servicies";

const SaveUser = () => {
  //usamos un hook que nos da RRD, para traer par'ametro y as'i compretar la url, puedo ir a buscar esos datos a la base de datos para luego hacer algo con ese user
    const { userId } = useParams();
    
  //armo un estado y le agrego un hook que tengo que importa arriba useState
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userBirthdate, setUserBirthdate] = useState<Date>(new Date());
  
  
  const SaveUser = (e: any) => {
    e.preventDefault();
    const user = {
        name: userName,
        lastname: userLastName,
        email: userEmail,
        password: userPassword,
        birthdate: userBirthdate
      }
      userService.add(user);
  };

  return (
    <>
      <h1>Estoy en Save Usuer</h1>
      <form onSubmit={SaveUser}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name-user"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* daberia hacer los otros input con lastname, email, pasword, birthdate */}
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            name="lastName"
            id="lastName-user"
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
          />
          <label htmlFor="Email">Mail</label>
          <input
            type="text"
            name="Email"
            id="email-user"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <label htmlFor="Password">Password</label>
          <input
            type="pasword"
            name="Pasword"
            id="pasword-category"
            value={userPassword}
            onChange={(e) =>  setUserPassword(e.target.value)}
          />
          <label htmlFor="birthday">Fecha de Nacimiento</label>
          <input
            type="date"
            name="Birthday"
            id="birthday-category"
            value={userBirthdate.toString()}
            onChange={(e) => setUserBirthdate(new Date( e.target.value))}
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
