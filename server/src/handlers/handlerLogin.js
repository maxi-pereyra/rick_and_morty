const login = require('../controllers/login');

const handlerLogin = (req,res) => {
    try {
        const{email , password} = req.query;

        const response = login(email , password);
        return res.status(200).json({acces : response})
        
    } catch (error) {
        return res.status(200).json({error : error.message})
    }
}

module.exports = {handlerLogin};