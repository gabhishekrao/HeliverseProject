import userModel from "../model/userModel.js";


export const createUser = async (req, res) => {
    try {

        const { first_name, last_name, email, gender, domain, available } = req.body

        const idCount = await userModel.countDocuments() + 1

        const userAvatar = `https://robohash.org/sintessequ${idCount}aerat.png?size=50x50&set=set1`

        const newData = new userModel({
            id: idCount,
            first_name: first_name,
            last_name: last_name,
            email: email,
            avatar: userAvatar,
            gender: gender,
            domain: domain,
            available: available
        })

        newData.save()

        res.send({ successful: "Data is created", msg: newData })


    } catch (error) {
        console.error("Error in createUser Controller", error.message);
    }
}



export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find()

        res.status(200).send({ data: allUsers })
    } catch (error) {
        console.error("Error in getAllUsers controller", error.message);
    }
}



export const getUserById = async (req, res) => {
    try {

        const userId = req.params.id

        const findUser = await userModel.findOne({ "id": userId })

        res.status(200).send({ data: findUser })

    } catch (error) {
        console.error("Error in getUserById controller", error.message);
    }
}


export const updateUserById = async (req, res) => {
    try {

        const data = req.body
        const userId = req.params.id


        const updatedUserData = await userModel.findOneAndUpdate({ id: userId }, { $set: data }, { new: true })

        res.status(200).send({ data: updatedUserData })

    } catch (error) {
        console.error("Error in updateUserById controller", error.message);
    }
}



export const deleteUserById = async (req, res) => {
    try {

        const userId = req.params.id

        const deleteUser = await userModel.deleteOne({ id: userId })

        res.status(200).send({ message: "User Deleted successfully" })

    } catch (error) {
        console.error("Error in deleteUserById controller", error.message);
    }
} 