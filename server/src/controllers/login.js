const users = require('../utils/users');


const login = (email , password) => {
    
     console.log(email,password)
    
     const userFind = users.find( user => user.email === email && user.password === password)

    if(userFind){
        return true;
    }else{
        return false;
    }
};

module.exports = {login}