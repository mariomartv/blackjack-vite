 import _ from 'underscore';
 

 /**
  * 
  * @param {array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
  * @param {array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
  * @returns {array<String>} retorna el deck
  */
 //Esta función crea un nuevo deck
 export const crearDeck = (tiposDeCarta,tiposEspeciales) => {
    if ( !tiposDeCarta || tiposDeCarta===0) throw new Error('El tipo de cartas es obligatorio y debe ser un array de strings');
    if ( !tiposEspeciales || tiposEspeciales===0) throw new Error('El tipo de cartas especiales es obligatorio y debe ser un array de strings');

    let deck=[];
    for(let i=2; i<=10;i++ ){
        for(let tipo of tiposDeCarta){
            deck.push(i+tipo);
        }
    }

    for(let tipo of tiposDeCarta){
        for(let cartaEspecial of tiposEspeciales){
            deck.push(cartaEspecial+tipo)
        }
    }

    return _.shuffle(deck);
}