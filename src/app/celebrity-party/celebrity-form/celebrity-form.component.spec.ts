import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityFormComponent } from './celebrity-form.component';

describe('CelebrityFormComponent', () => {
  let component: CelebrityFormComponent;
  let fixture: ComponentFixture<CelebrityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelebrityFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebrityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
