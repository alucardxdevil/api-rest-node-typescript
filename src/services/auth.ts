import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { signToken } from "../utils/jwt.handle"

const registerNewUser = async ({name, email, password}: User) => {
    const checkIs = await UserModel.findOne({email})
    if (checkIs) return 'Already user'
    const passHash = await encrypt(password)
    const registerNewUser = await UserModel.create({name, email, password: passHash})
    return registerNewUser
}

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await UserModel.findOne({email})
    if (!checkIs) return 'Not found user'
    const passwordHash = checkIs.password
    const isCorrect = await verified(password, passwordHash)
    if(!isCorrect) return 'usuario o contraseña invalida'

    const token = signToken(checkIs.email)
    const data = {
        token,
        user: checkIs
    }

    return data
}

export { registerNewUser, loginUser }