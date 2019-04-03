import { Jugador } from "./clase";



describe('Pruebas de clase', ()=>{

    var jugador;    

    beforeAll( () => {
        console.log('beforeAll');
    });
    
    beforeEach( () => {
        jugador= new Jugador();
        console.log('beforeEach');
    });
    
    afterAll( () => {
        console.log('afterAll');
    });
    
    afterEach( () => {
        console.log('afterEach');
    });
    

    it('Debe de retornar 80, con 20 de daño', ()=>{
        
        const resp = jugador.recibeDanio(20);
        expect (resp).toBe(80);

    });

    it('Debe de retornar 50, con 50 de daño', ()=>{

        const resp = jugador.recibeDanio(50);
        expect (resp).toBe(50);

    });
    it('Debe de retornar 0, con 106 de daño', ()=>{

        const resp = jugador.recibeDanio(106);
        expect (resp).toBe(0);

    });

   
});

