let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;
    const characterFound = myFavorites.find(fav => fav.id === character.id);
    if(!characterFound){
        myFavorites,push(character);

        return res.status(200).json(myFavorites);
    }
    return res.status(404).send("Ya existe ese personaje en favoritos");
};

const deleteFav = (req, res) => {
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);

    return res.status(200).json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
};