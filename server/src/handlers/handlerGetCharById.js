const {getCharById} = require('../controllers/getCharById');

const handlerGetCharByid = async (req , res) => {
    try {
        const {id} = req.params;

        const response = await getCharById(id)
        console.log("response", response)
        return res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {handlerGetCharByid};