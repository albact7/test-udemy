import { Jugador2 } from './jugador2';

describe('Jugador 2 emit', ()=>{
    var jugador : Jugador2;

    beforeEach(()=> jugador = new Jugador2());

    it('Debe emitir un evento cuando recibe daño', ()=>{
        
        var nuevoHp = 0;
        
        jugador.hpCambia.subscribe(hp =>{ // esto escucha cuando se emita en jugador2
            nuevoHp = hp;
        });

        jugador.recibeDanio(1000);

        expect(nuevoHp).toBe(0);
    });
    it('Debe emitir un evento cuando recibe daño y sobrevivir si es menor que 100', ()=>{
        
        var nuevoHp = 0;
        
        jugador.hpCambia.subscribe(hp =>{ // esto escucha cuando se emita en jugador2
            nuevoHp = hp;
        });

        jugador.recibeDanio(50);

        expect(nuevoHp).toBe(50);
    });

});