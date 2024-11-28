import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert to fahrenheit', () => {
    expect(component.convertToFahrenheit(0)).toBe(32);
    expect(component.convertToFahrenheit(10)).toBe(50);
  });

  it('should render paths', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    // Check if each link is rendered
    expect(compiled.querySelector('div')?.textContent).toContain('About');
    expect(compiled.querySelector('div')?.textContent).toContain('Contact');
    expect(compiled.querySelector('div')?.textContent).toContain('Experience');
    expect(compiled.querySelector('div')?.textContent).toContain('Work');
  });
});
