# LaunchExplorer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

Launch Explorer utilizes [this SpaceX API](https://github.com/r-spacex/SpaceX-API) to display data on SpaceX launches throughout history.

## Suggested next steps given more time on this project:

_Code Improvements_

- Increase accessibility (Aria labels, semantic html, image alt text, better spacing, etc.)
- Look into caching to avoid having to fetch data on every page every time
- Clean up all the conditionals in launch-details template with variables in component
- More robust error handling/logging
- Find a way to remove API call from details page since we already have this data (can you pass objects as router props in Angular the way you can in React? Looks like only as query params in URL?)

_Features_

- Make responsive for mobile screen sizes
- Add page num and sort by query params to URL to retain settings when navigating back
- Add text input to jump to specific page
- Allow customized number of records returned per page
- Add thumbnails for media links
- Add search functionality

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
