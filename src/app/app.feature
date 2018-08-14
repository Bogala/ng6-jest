Feature: App module testing

Scenario: Title is good
  When I launch the application
  Then render title in a h1 tag
