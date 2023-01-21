import { useState } from "react";
import { categoriesService } from "../../Servicies";
import Alert from "react-bootstrap/Alert";
import NavBar from "../../Components/Layout/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

const SaveCategory = () => {
  //armo un estado y le agrego un hook que tengo que importa arriba useState, catName y setCatNme los usamos para controlar lo q se va escribiendo en el input, voy a tener los datos seteados/actualizados de lo q valla escribiendo en el imput

  const [catName, setCatName] = useState("");
  const [color, setColor] = useState("");
  const [ifError, setIfError] = useState(false);

  const category = {
    name: catName,
    color: color,
  };
  //armo una fx que va a recibir un evento, le pongo un e.default para que no me tire error, este saveCategory es funcion
  const saveCategory = async (e: any) => {
    e.preventDefault();

    const rta = await categoriesService.add(category);
    if (rta) {
      setCatName("");
      setColor(""); //esto vacia el input cuando se carga
    } else {
      setIfError(true);
    }
  };

  return (
    <>
      <NavBar />
      <h1>Nueva Categoria</h1>
      <form onSubmit={saveCategory}>
        <Stack direction="horizontal" gap={3}>
          <Form.Control
            className="me-auto"
            placeholder="Nombre"
            type="text"
            name="name"
            id="name-category"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
          />
          <label htmlFor="color-category">Color</label>

          <Form.Control
            className="me-auto"
            placeholder="Color"
            type="color"
            name="color"
            color="color"
            id="color-category"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <Button type="submit" variant="secondary" className="btn btn-primary">
            Agregar
          </Button>
          {ifError && (
            <Alert variant="danger">
              <Alert.Heading>Error!</Alert.Heading>
            </Alert>
          )}
        </Stack>
      </form>
    </>
  );
};

export { SaveCategory };

// <div className="form-group">
//   <label htmlFor="name-category">Nombre</label>
//   <input
//     type="text"
//     name="name"
//     id="name-category"
//     value={catName}
//     onChange={(e) => setCatName(e.target.value)}
//   />
//   <label htmlFor="color-category">Color</label>
//   <input
//     type="color"
//     name="color"
//     color="color"
//     id="color-category"
//     value={color}
//     onChange={(e) => setColor(e.target.value)}
//   />
// </div>
// <button type="submit" className="btn btn-primary">
//   Agregar
// </button>
// {ifError &&
// <Alert variant="danger">
// <Alert.Heading>Error!</Alert.Heading>
// </Alert> }
