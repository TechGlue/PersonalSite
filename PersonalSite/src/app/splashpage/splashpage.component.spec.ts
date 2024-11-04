import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashpageComponent } from './splashpage.component';

describe('SplashpageComponent', () => {
  let component: SplashpageComponent;
  let fixture: ComponentFixture<SplashpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplashpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplashpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
