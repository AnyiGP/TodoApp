import { Children } from "react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant: "primary" | "secondary" | "default" | "danger";
  icon?: string;
};

const Button: FC<Props> = ({ children, variant, icon }) => {
  return (
    <button className={`btn btn-${variant}`}>
      <i className={`bi-${icon}`}></i> 
      {children /*contenido que hay entre 2 tags*/}
    </button>
  );
};

export { Button };
