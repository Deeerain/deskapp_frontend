import axios from "axios"

interface ILoginUserData {
    username: string
    password: string
}

interface IAuthResponseData {
    access: string
    refresh: string
}

class AuthError implements Error {
    name: string = ""
    message: string

    constructor (message: string) {
        this.message = message
    }
}

export async function login(loginUserData: ILoginUserData) {
    try {
        const response = await axios.post('auth/token/', loginUserData)

        return response.data as IAuthResponseData
    
    }catch(err) {
        throw new AuthError(err.message)
    }
}