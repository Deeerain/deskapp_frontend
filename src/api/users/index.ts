import axios from "axios";

export interface IDepartment {
    id?: number
    name: string
}

export interface IPosition {
    id?: number
    name: string
    department: IDepartment
}

export interface IUser {
    id?: number
    username: string
    first_name: string
    last_name: string
    email: string
    telephone: string
    position: IPosition
    last_login: Date
}


export async function get_me() {
    try {
        const user_data = await axios.get('users/me/')

        return user_data.data as IUser

    }catch(err) {
        throw new Error(err.message)
    }
}