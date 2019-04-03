import { obtenerRobots } from "./arrays";

xdescribe('Pruebas de arrays', ()=>{

    it('Debe de retornar al menos 3 robots', ()=>{

        const resp = obtenerRobots();
        expect (resp.length).toBeGreaterThanOrEqual(3);

    });

    it('Debe de existir MegaMan y robOT', ()=>{

        const resp = obtenerRobots();
        expect (resp).toContain('MegaMan');
        expect (resp).toContain('robOT');

    });

   
});

