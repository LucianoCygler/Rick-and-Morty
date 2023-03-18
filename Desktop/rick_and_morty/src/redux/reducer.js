import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO } from './actions'
const initialState = {
    myFavorites: [],
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case AGREGAR_FAVORITO:
            return { ...state, myFavorites: [...state.myFavorites, action.payload] };

        case ELIMINAR_FAVORITO:
            // const updatedFavorites = state.myFavorites.filter(
            //   (favorite) => favorite.id !== action.payload
            // );
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload
                ),
            };

        default:
            return state;
    }
}
export default rootReducer;