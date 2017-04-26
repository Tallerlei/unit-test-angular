import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { SampleComponent } from './sample.component';
describe('SampleComponent (inline template)', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;
  // For Debugging HTML Elements
  let debug: DebugElement;
  let htmlElem: HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleComponent], // Our Test sample component
      providers: [
        {
          provide: ComponentFixtureAutoDetect, useValue: true
        }
      ]
    });
    // Get the ComponentFixture
    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance; // SampleComponent test instance
    // CSS Element selector
    debug = fixture.debugElement.query(By.css('h1'));
    htmlElem = debug.nativeElement;
  });
  it('don’t show any title on DOM until we call `detectChanges`', () => {
    expect(htmlElem.textContent).toEqual('');
  });
  it('should display original title', () => {
    fixture.detectChanges();
    expect(htmlElem.textContent).toContain(component.title);
  });
  it('should display a different test title', () => {
    component.title = 'Different Test Title';
    fixture.detectChanges();
    expect(htmlElem.textContent).toContain('Different Test Title');
  });
});
