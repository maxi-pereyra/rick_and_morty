let myFavorites = [];

const postFav = (character)=>{

    myFavorites.push(character);

    return myFavorites;
};

const deleteFav = (id) => {
    
    myFavorites = myFavorites.Filter((favorite)=> favorite.id !== +id);

    return myFavorites;
}

module.exports ={
    postFav,
    deleteFav
}