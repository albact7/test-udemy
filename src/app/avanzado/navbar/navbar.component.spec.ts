import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { AppComponent } from 'src/app/app.component';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to medicos page', ()=>{
   
    const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref)); 
    console.log(elementos);
    
    var existe = false;
    for(const elem of elementos){
      if(elem.attributes['routerLink']=== '/medicos'){
        existe = true;
        break;
      }
    }
    expect(existe).toBeTruthy();       
  });
});
