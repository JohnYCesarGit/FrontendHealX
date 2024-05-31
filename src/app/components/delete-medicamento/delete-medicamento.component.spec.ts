import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMedicamentoComponent } from './delete-medicamento.component';

describe('DeleteMedicamentoComponent', () => {
  let component: DeleteMedicamentoComponent;
  let fixture: ComponentFixture<DeleteMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMedicamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
