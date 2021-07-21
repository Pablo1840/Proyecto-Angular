import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePostulanteComponent } from './update-postulante.component';

describe('UpdatePostulanteComponent', () => {
  let component: UpdatePostulanteComponent;
  let fixture: ComponentFixture<UpdatePostulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePostulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
