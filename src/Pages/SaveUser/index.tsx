import { useParams } from "react-router-dom";
import { useState } from "react";
import { userService } from "../../Servicies";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import NavBar from "../../Components/Layout/Nav";
import Alert from "react-bootstrap/Alert";

const SaveUser = () => {
  //usamos un hook que nos da RRD, para traer param y compretar la url, puedo ir a buscar esos datos a la base de datos para luego hacer algo con ese user
  const { userId } = useParams();

  //armo un estado y le agrego un hook que tengo que importa arriba useState
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userBirthdate, setUserBirthdate] = useState<Date>(new Date());
  const [ifError, setIfError] = useState(false);

  const user = {
    name: userName,
    lastname: userLastName,
    email: userEmail,
    password: userPassword,
    birthdate: userBirthdate,
  };

  const saveUser = async (e: any) => {
    e.preventDefault();
    const respuesta = await userService.add(user);
    // if (respuesta) {
    //   setUserName("");
    //   setUserLastName("");
    //   setUserEmail("");
    //   setUserPassword("");
    // } else {
    //   setIfError(true);
    // }

    ///no me deja setear los datos, respuesta me da error porque no está typado, cómo lo typeo?
    
  };

  return (
    <>
      <NavBar />
      <h2>Crear Nuevo Usuario</h2>
      <Form onSubmit={saveUser}>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Nombre
            </Form.Label>
            <Form.Control
              className="mb-2"
              placeholder="Nombre"
              type="text"
              name="name"
              id="name-user"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Apellido
            </Form.Label>
            <Form.Control
              className="mb-2"
              placeholder="Apellido"
              type="text"
              name="lastName"
              id="lastName-user"
              value={userLastName}
              onChange={(e) => setUserLastName(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="Email" visuallyHidden>
              Mail
            </Form.Label>
            <InputGroup className="mb-2">
              <Form.Control
                placeholder="Mail"
                type="text"
                name="Email"
                id="email-user"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="Password" visuallyHidden>
              Mail
            </Form.Label>
            <InputGroup className="mb-2">
              <Form.Control
                placeholder="Password"
                type="pasword"
                name="Pasword"
                id="pasword-category"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="birthday" visuallyHidden>
              Mail
            </Form.Label>
            <InputGroup className="mb-2">
              <Form.Control
                placeholder="Fecha de Nac."
                type="date"
                name="Birthday"
                id="birthday-category"
                value={userBirthdate.toString()}
                onChange={(e) => setUserBirthdate(new Date(e.target.value))}
              />
            </InputGroup>
          </Col>

          <Col xs="auto">
            <Button type="submit" className="mb-2" variant="dark">
              Agregar
            </Button>
          </Col>
          {ifError && (
            <Alert variant="danger">
              <Alert.Heading>Error!</Alert.Heading>
            </Alert>
          )}
        </Row>
      </Form>
    </>
  );
  //   <div>Estoy en save user editando el usuario {userId} </div>;
};

export { SaveUser };
