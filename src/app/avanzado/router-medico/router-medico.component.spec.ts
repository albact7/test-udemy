import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';

class FakeRouter{
  navigate(params){}
}
class FakeActivatedRoute{
  //params: Observable<any> = empty();
  private subject = new Subject();

  get params(){
    return this.subject.asObservable();
  }

  push(valor){
    this.subject.next(valor);
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers:[
        {provide: Router, useClass:FakeRouter},
        {provide: ActivatedRoute, useClass:FakeActivatedRoute}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to medico when added', ()=>{
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);

  });

  it('should assing nuevo to variable id', ()=>{
    component = fixture.componentInstance;
    const activatedRoute : FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({id: 'nuevo'});

    expect(component.id).toBe('nuevo');  
  });
});
