import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogmaterialComponent } from './dialogmaterial.component';

describe('DialogmaterialComponent', () => {
  let component: DialogmaterialComponent;
  let fixture: ComponentFixture<DialogmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
