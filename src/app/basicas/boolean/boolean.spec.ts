import { contrario } from "./boolean";


describe('Pruebas de booleans', ()=>{

    it('Debe de retornar falso', ()=>{

        var verdadero=true;
        const resp = contrario(verdadero);
        expect (resp).toBeFalsy();

    });

   
});

