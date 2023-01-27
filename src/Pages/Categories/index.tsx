import { FC, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import MyLayout from "../../Components/Layout";
import NavBar from "../../Components/Layout/Nav";
import { categoriesService } from "../../Servicies";
import { Category } from "../../types";
import Button from 'react-bootstrap/Button';

const Categories: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const traerCategorias = async () => {
    const rta = await categoriesService.getAll();
    // console.log(rta);

    // if (!categories.length) setCategories(rta);

    
    setCategories(rta);

    // const traerCategorias = () => {
    //   categoriesService.getAll().then((data) => setCategories(data))
    // console.log(categories)
  };

  if (!categories.length) traerCategorias()
 
  // useEffect(() => {
  //   traerCategorias();
  // }, []);

  const borrarCategoria = async (id: string) => {
    await categoriesService.remove(id)
    traerCategorias();
  }

  // useEffect(() => {
  //   traerCategorias();
  // }, []);

  return (
    <>
    <NavBar/>
    <div className="categories">
      
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <td colSpan={4}>Categorias</td>
          </tr>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.color}</td>
                <td>
                <Button variant="secondary" className="btn" onClick={() => borrarCategoria(elem.id)}>Borrar</Button>{' '}
                {/* /cuando necesita esperar el evento de un usuario el onClick lleva una arrow fx () => , espera a que alguien haga click/ */}
                </td>
                <td>
                <Button variant="secondary">Editar</Button>{' '}
                </td>
  
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
    </>
  );
  
};

export { Categories };
