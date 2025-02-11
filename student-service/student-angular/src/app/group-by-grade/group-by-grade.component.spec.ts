import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupByGradeComponent } from './group-by-grade.component';

describe('GroupByGradeComponent', () => {
  let component: GroupByGradeComponent;
  let fixture: ComponentFixture<GroupByGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupByGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupByGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
