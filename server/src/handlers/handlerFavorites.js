const {  postFav,deleteFav } = require('../controllers/Favorites');

const handlerPostFav = (req,res) => {
        try {
            const character = req.body;

            const response = postFav(character);

            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
} 

const handlerDeleteFav = (req,res) => {
    try {
        const {id} = req.params;

        const response = deleteFav(id);
        
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

module.exports = {
    handlerDeleteFav,
    handlerPostFav
}
