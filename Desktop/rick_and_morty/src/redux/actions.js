export const AGREGAR_FAVORITO = "AGREGAR_FAVORITO";
export const ELIMINAR_FAVORITO = "ELIMINAR_FAVORITO";

export const agregarFavorito = (character) => {
    return { type: AGREGAR_FAVORITO, payload: character }
}

export const eliminarFavorito = (id) => {
    return { type: ELIMINAR_FAVORITO, payload: id }
}