/**
 * 
 * @param {String} carta 
 * @param {Number} posicionDiv 
 */

export const crearCarta = (carta, posicionDiv) => {
    if (!carta) throw new Error ('La carta es necesaria');
    const divCartasJugadores = document.querySelectorAll('.divCartas')
  const imgCarta = document.createElement('img');
      imgCarta.src   = `assets/cartas/${carta}.png`;
      imgCarta.classList.add('carta');
      divCartasJugadores[posicionDiv].append(imgCarta);
}