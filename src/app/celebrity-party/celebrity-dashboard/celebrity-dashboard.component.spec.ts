import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityDashboardComponent } from './celebrity-dashboard.component';

describe('CelebrityDashboardComponent', () => {
  let component: CelebrityDashboardComponent;
  let fixture: ComponentFixture<CelebrityDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelebrityDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebrityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
