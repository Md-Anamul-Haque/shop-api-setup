import createUser from "./user.create"
import deleteUser from "./user.delete"
import findUser from "./user.find"
import findOneUser from "./user.findOne"
import updateUser from "./user.update"

const handleUsers = {
    create: createUser,
    find: findUser,
    findOne: findOneUser,
    update: updateUser,
    delete: deleteUser
}

export default handleUsers