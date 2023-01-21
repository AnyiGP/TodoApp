import { FC, useEffect, useState } from "react";
// import { Categories } from "..";
import Table from "react-bootstrap/Table";
import MyLayout from "../../Components/Layout";
import NavBar from "../../Components/Layout/Nav";
import { categoriesService } from "../../Servicies";
import { Category } from "../../types";

const Categories: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const traerCategorias = async () => {
    const rta = await categoriesService.getAll();
    console.log(rta);

    if (!categories.length) setCategories(rta);

    // const traerCategorias = () => {

    //   categoriesService.getAll().then((data) => setCategories(data))
    // console.log(categories)
  };

  useEffect(() => {
    traerCategorias();
  }, []);

  return (
    <>
    <NavBar/>
    <div className="categories">
      {/* debe mostrar el listado de las categorias en una tabla */}

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <td colSpan={3}>Categorias</td>
          </tr>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.color}</td>
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
