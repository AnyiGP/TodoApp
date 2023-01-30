import { Children } from "react";
import { FC, ReactNode } from "react";
import Button from 'react-bootstrap/Button';

type Props = {
  children?: ReactNode;
  variant: "primary" | "secondary" | "default" | "danger" | 'dark';
  icon?: 'alarm' | 'x-circle' | 'arrow-down-square-fill';
};

const Btn: FC<Props> = ({ children, variant, icon }) => {
  return (
    <Button className={`btn btn-${variant}`}>
      <i className={`bi bi-${icon}`}></i> 
      {children /*contenido que hay entre 2 tags*/}
    </Button>
  );
};

export { Btn };
