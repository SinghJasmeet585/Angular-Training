import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { NotesService } from 'src/app/services/notes.service';
//import { By } from '@angular/platform-browser';
//import { By } from 'protractor';

import { TestingComponent } from '../src/app/testing/testing.component';

fdescribe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;
  let noteService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingComponent ],
      imports: [MatToolbarModule],
      providers: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    noteService = fixture.debugElement.injector.get(NotesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check Jasmine assert method',()=>{
    expect(true).toBe(true);
  })

  it('should contain class abc',()=>{
    const element1 = fixture.debugElement.query(By.css('.abc'));
    const x=element1.nativeElement;
    expect(x.textContent).toBe('testing works!',"should contain <p>");
  })

  it('should contain class xyz',()=>{
    let debugElement = fixture.debugElement.query(By.css('xyz'));
    let x = debugElement.nativeElement;
    //expect(x.textContent).toBe('Keep',"should contain <Mat>");
    expect(x).toBeTruthy();
    expect(x.value).toBe('abc');
  })
  

});
