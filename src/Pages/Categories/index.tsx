import { FC, useEffect, useState } from "react";
// import { Categories } from "..";
import MyLayout from "../../Components/Layout";
import { categoriesService } from "../../Servicies";
import { Category } from "../../types";


const Categories: FC = () => {

  const [categories, setCategories] = useState<Category[]>([]);

  const traerCategorias = () => {

    categoriesService.getAll().then((data) => setCategories(data))
  console.log(categories)
  }

  useEffect(() => {
    traerCategorias()
  }, []) 


  return (
    <div className="categories">
      <MyLayout />
      <h1>Categories</h1>

      {/* debe mostrar el listado de las categorias */}
      
    </div>
  );
};

export { Categories };
