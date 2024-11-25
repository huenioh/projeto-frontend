import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarLivroComponent } from './buscar-livro.component';

describe('BuscarLivroComponent', () => {
  let component: BuscarLivroComponent;
  let fixture: ComponentFixture<BuscarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarLivroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
