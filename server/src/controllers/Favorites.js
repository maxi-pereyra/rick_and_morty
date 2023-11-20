let myFavorites = [];

const postFav = (character)=>{

    myFavorites.push(character);

    return myFavorites;
};

const deleteFav = (id) => {
    
    console.log("delete" , myFavorites)
    console.log("id" , id , typeof id)
    myFavorites = myFavorites.filter(fav => fav.id !== Number(id))

    console.log("deletetrue" , myFavorites)

    return myFavorites;
}

module.exports ={
    postFav,
    deleteFav
}