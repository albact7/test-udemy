import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { Observable, from, empty, throwError } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];
        spyOn(servicio, 'getMedicos').and.callFake(()=>{

            return from([ medicos ]);
        });

        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);
   
    });

    it('Debe de llamar al servidor para agregar un medico', ()=>{
        const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico)=>{
            return empty(); // no me interesa el resultado, solo quiero saber que se llame al metodo
        });
        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();
    });

    it('Debe de agregar un nuevo medico al array de medicos', ()=>{

        const medico = {id:1, nombre: 'Juan'};

        spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adicion, la propiedad mensajeError debe ser igual al error del servicio', ()=>{
        const miError = 'este es un mensaje de error';
        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));
        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);
    });

    it('Debe llamar al servidor para borrar un medico',()=>{
        spyOn(window, 'confirm').and.returnValue(true);
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());
        componente.borrarMedico('1');
        expect(espia).toHaveBeenCalledWith('1');
    });

    it('No debe llamar al servidor para borrar un medico',()=>{
        spyOn(window, 'confirm').and.returnValue(false);
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty());
        componente.borrarMedico('1');
        expect(espia).not.toHaveBeenCalledWith('1');
    });


});
