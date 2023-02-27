import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyVisitComponent } from './recently-visit.component';

describe('RecentlyVisitComponent', () => {
  let component: RecentlyVisitComponent;
  let fixture: ComponentFixture<RecentlyVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyVisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
