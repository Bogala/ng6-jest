import { defineFeature, loadFeature } from 'jest-cucumber';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

const feature = loadFeature('src/app/app.feature');

defineFeature(feature, test => {
  test('Title is good', ({ when, then }) => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent]
      }).compileComponents();
    }));

    let compiled;

    when('I launch the application', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    });

    then('render title in a h1 tag', () => {
      expect(compiled.querySelector('h1').textContent).toContain(
        'Welcome to ngj!'
      );
    });
  });
});
