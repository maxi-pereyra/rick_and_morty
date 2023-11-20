
const { handlerLogin } = require("../handlers/handlerLogin");
const { handlerGetCharByid } = require("../handlers/handlerGetCharById");
const { handlerPostFav , handlerDeleteFav } = require("../handlers/handlerFavorites");
const { handlerGetCharacter } = require("../handlers/handlerGetCharacter")
const { handlerGetCharacterByName } = require("../handlers/handlerGetCharacterByName");

const router = require('express').Router();


router.get('/',(req , res)=>{
    handlerGetCharacter(req , res)
})

router.get('/character/:id',(req,res)=>{
    handlerGetCharByid(req,res);
});

router.get('/character',(req,res)=>{
    handlerGetCharacterByName(req,res)
});

router.get('/login',(req,res)=>{
    handlerLogin(req,res);
}); 


router.post('/fav',(req,res)=>{
    handlerPostFav(req,res);
});


router.delete('/fav/:id',(req,res)=>{
    handlerDeleteFav(req,res);
});

module.exports = router;