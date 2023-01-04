import _ from 'underscore'; 


import {crearDeck,pedirCarta,valorCarta,crearCarta} from './usecases'



const miModulo = (() => {

  let deck = [];

  const tipos            = ['C','D','H','S'],
        cartasEspeciales = ['A','J','Q','K'];

  let puntosJugadores = [];

  //ReeferenciasAlHTML
  const btnPedirCarta    = document.querySelector('#btnPedirCarta'),
        smallPuntuacion  = document.querySelectorAll('small');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        btnDetener       = document.querySelector('#btnDetenerJuego'),
        btnNuevo         = document.querySelector('#btnNuevoJuego');

  const inicializarJuego = (numJugadores = 2) => {
      deck=crearDeck(tipos,cartasEspeciales);
      puntosJugadores=[];
      for(let i=0; i<numJugadores;i++){
          puntosJugadores.push(0);
      }

      smallPuntuacion.forEach(elem => elem.innerText=0);
      divCartasJugadores.forEach(elem => elem.innerHTML='');

      btnDetener.disabled    = false;
      btnPedirCarta.disabled = false;

      
  } 
  
  
       

  

  
  //pedirCarta();

 

  const acumularPuntos= (carta,turno) => {
      puntosJugadores[turno]=puntosJugadores[turno] + valorCarta(carta);
      smallPuntuacion[turno].innerText=puntosJugadores[turno];
      return puntosJugadores[turno]
  }

  

  const determinarGanador = () => {
      
      const [puntosMinimos,puntosMaquina] = puntosJugadores;

      setTimeout(()=> {
          if (puntosMaquina>21){
              alert('Ganaste')
          } else if (puntosMaquina===puntosMinimos) {
              alert('Empate')
          } else if (puntosMaquina>puntosMinimos) {
              alert('Perdistee')
          }
      },100)
  }
  //turno de la maquina
  const turnoMaquina= (puntosMinimos) => {
      let puntosMaquina=0;
      do {
          const carta = pedirCarta(deck);

          puntosMaquina = acumularPuntos(carta, puntosJugadores.length -1);

          //mostrar carta en el div de la maquina
          crearCarta(carta, divCartasJugadores.length-1);

          

      } while((puntosMaquina<puntosMinimos) && (puntosMinimos<=21) )

      determinarGanador();
  }


  //Eventos
  btnPedirCarta.addEventListener('click', () => {

      const carta = pedirCarta(deck);

      const puntosJugador=acumularPuntos(carta, 0);

      //mostrar carta en el div del jugador
      crearCarta(carta,0);

      //logica del juego
      if(puntosJugador>21){
          
          alert('Perdiste payaso');
          btnPedirCarta.disabled = true;
          btnDetener.disabled    = true;
          turnoMaquina(puntosJugador);
      } else if ( puntosJugador===21){
          alert('Ganaste payaso')
          btnPedirCarta.disabled = true;
          btnDetener.disabled    = true;
      }
  })

  //Detener Juego
  btnDetener.addEventListener('click', () => {
      btnPedirCarta.disabled = true;
      btnDetener.disabled    = true;
      turnoMaquina(puntosJugadores[0]);


  });

  //Nueva Partida
  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
      
  })

  return {
      nuevoJuego: inicializarJuego
  }
})();




