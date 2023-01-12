# Trabajo Práctico TODO APP

- Lo primero que tenemos que hacer es abrir la terminal / consola y posicionarnos en la carpeta en la cual deseamos alojar nuestra aplicación.
- Vamos a crear nuestra aplicación con uno de los siguientes comandos:

npx create-react-app todoapp --template typescript

ó

npx create-react-app todoapp

- Luego de limpiar la aplicación vamos a crear una carpeta pages, otra components y otra assets.
- La carpeta components va a estar compuesta por las carpetas commons, forms y layout.
- El layout estará compuesto por un header, una barra de navegación, footer y main.
- Vamos a contar con las siguientes páginas: Login, SignUp, Dashboard, Tasks, Categories, AddTask, AddCategory, Profile.
- Todas las páginas harán uso del Layout.
- En App.tsx vamos a crear una navegación que responderá a un estado controlado por la barra de navegación.
- En la barra de navegación vamos a agregar tantos items como páginas tenemos. Por el momento vamos a mostrar todos los items, luego veremos como podemos mostrar solo aquellos items que correspondan según los permisos del usuario en sesión.
- Las páginas Login, SignUp, addTask y addCategory están compuestas por formularios que responden a los siguientes types.

type User = {
    id: string
    name: string
    lastname: string
    email: string
    password: string
    birthdate: Date
}

type Category = {
    id: string
    name: string
}

type Task = {
    id: string
    title: string
    date: Date
    category: Category
    description: string
}

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
