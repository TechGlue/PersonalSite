import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashpageComponent } from './splashpage.component';

describe('SplashpageComponent', () => {
  let component: SplashpageComponent;
  let fixture: ComponentFixture<SplashpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplashpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SplashpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the button', () => {
    const fixture = TestBed.createComponent(SplashpageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain(
      "Let's talk",
    );
  });

  it('on button click should change the url to /contact', () => {
    const fixture = TestBed.createComponent(SplashpageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button');
    expect(button).not.toBeNull();

    if (button !== null) {
      expect(button.textContent).toContain("Let's talk");
    }
  });
});
