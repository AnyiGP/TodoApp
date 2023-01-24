import { User } from "../../types"
import { URL_BASE } from "../../Constantes"
import { Type } from "typescript"
import { mapToArray } from "../../helpers/mapToArray"

const getAll = async () => {
    const response = await fetch(`${URL_BASE}/user.json`)
    const data = await response.json()

    return mapToArray<User>(data) //le pasamos como param la data que cae de firebase, los users

}

const get = (id: string) => {}

type AddPayload = Omit<User, "id">
//2.33.55
const add = async (user: AddPayload) => {
    const options = {
        method: "POST",
        body: JSON.stringify(user) 
    }
    //le pongo el end point que yo quiero es lo que se va a mostrar  
    const response = await fetch(`${URL_BASE}/user.json`, options)

    const data = await response.json()

    // console.log(data)

}

export const userService = { getAll, get, add }

// userService.getAll()