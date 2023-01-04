//Esta función me permite tomar una carta


/**
 * 
 * @param {Array<string>} deck 
 * @returns {String} devuelve la carta
 */

export const pedirCarta = ( deck ) => {
      

    if (!deck || deck.length===0){
        throw 'No hay más cartas disponibles';
    }

    
    return deck.pop();
}
