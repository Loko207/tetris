import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlerComponent } from './game-controler.component';

describe('GameControlerComponent', () => {
  let component: GameControlerComponent;
  let fixture: ComponentFixture<GameControlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameControlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
