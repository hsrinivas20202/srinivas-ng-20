import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xyz } from './xyz';

describe('Xyz', () => {
  let component: Xyz;
  let fixture: ComponentFixture<Xyz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Xyz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Xyz);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
