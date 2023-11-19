const {getCharacter} = require('../controllers/getCharacter');

const handlerGetCharacter = async (req , res ) => {
    try {
        const response = await getCharacter();
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = {handlerGetCharacter};