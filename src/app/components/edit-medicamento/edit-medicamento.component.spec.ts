import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicamentoComponent } from './edit-medicamento.component';

describe('EditMedicamentoComponent', () => {
  let component: EditMedicamentoComponent;
  let fixture: ComponentFixture<EditMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMedicamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
