import React from 'react';
import { connect, useSelector } from "react-redux";
import Card from '../Card/Card';
const Favorites = () => {
    const favorites = useSelector(state => state.myFavorites)
    return (
        <>
            {favorites.map((fav) => {
                return <Card key={fav.id}
                    id={fav.id}
                    name={fav.name}
                    species={fav.species}
                    gender={fav.gender}
                    image={fav.image}
                    />;
            })}
        </>



    )
}


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);