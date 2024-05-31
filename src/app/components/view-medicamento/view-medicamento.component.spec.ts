import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicamentoComponent } from './view-medicamento.component';

describe('ViewMedicamentoComponent', () => {
  let component: ViewMedicamentoComponent;
  let fixture: ComponentFixture<ViewMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMedicamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
