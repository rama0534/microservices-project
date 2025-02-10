import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUpdateModalComponent } from './save-update-modal.component';

describe('SaveUpdateModalComponent', () => {
  let component: SaveUpdateModalComponent;
  let fixture: ComponentFixture<SaveUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveUpdateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
