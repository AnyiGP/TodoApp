import { User } from "../../types"
import { URL_BASE } from "../../Constantes"
import { Type } from "typescript"

const getAll = () => {}

const get = (id: string) => {}

type AddPayload = Omit<User, "id">

const add = async (user: AddPayload) => {
    const options = {
        method: "POST",
        body: JSON.stringify(user) 
    }
    //le pongo el end point que yo quiero es lo que se va a mostrar  
    const response = await fetch(`${URL_BASE}/user.json`, options)

    const data = await response.json()

    console.log(data)

}

export const userService = { getAll, get, add }