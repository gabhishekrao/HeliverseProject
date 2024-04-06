import teamModel from "../model/teamModel.js";
import userModel from "../model/userModel.js";



export const createTeam = async (req, res) => {
    try {
        const data = req.body

        let { teamName, teamDomain, members } = data


        const teamCount = await teamModel.countDocuments()

        const teamMember = await userModel.findOne({ id: members })

        const teamMembersId = teamMember._id

        const newTeam = new teamModel({
            id: teamCount + 1,
            teamName: teamName,
            teamDomain: teamDomain,
            members: teamMembersId
        })

        newTeam.save()

        res.status(201).send({ data: newTeam })
    } catch (error) {
        console.error("Error in createTeam controller", error.message);
    }
}


export const getTeamById = async(req, res) => {
    try {

        const teamId = req.params.id

        const findTeam = await teamModel.findOne({id: teamId})

        res.status(200).send({data: findTeam})
    } catch (error) {
        console.error("Error in getTeamById controller", error.message);
    }
}
