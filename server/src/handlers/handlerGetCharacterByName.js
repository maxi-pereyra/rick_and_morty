const {getCharacterByName} = require('../controllers/getCharacterByName');

const handlerGetCharacterByName = async (req , res) => {

    try {
        const {name} = req.query;
        console.log("name" ,name)
        const response = await getCharacterByName(name);

        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

module.exports = {handlerGetCharacterByName}