# Currency Converter

Currency Converter is a web application built with Angular that allows users to convert amounts between different currencies. The project supports real-time conversion using up-to-date exchange rates.

[![DEMO](https://img.shields.io/badge/live%20demo-0073cf?style=for-the-badge&logoColor=white)](https://juliakarpenko.github.io/currency-converter-angular/)

![Demo](https://github.com/JuliaKarpenko/currency-converter-angular/blob/main/demo.gif)

## Key Features

- Currency Conversion: Users can select two different currencies and enter the amount they wish to convert.
- Automatic Conversion: After entering the amount or changing the currency, the conversion result updates automatically.
- Currency Swap: A "Swap" button allows users to quickly swap the selected currencies for both fields.
- Icon Support in Dropdowns: Users can see the corresponding currency icons next to their codes in the dropdown menu.

## Technologies Used

- Angular: The main framework for developing the user interface.
- TypeScript: Used for typed programming, providing greater reliability in the code.
- HTML/CSS: Used to create the layout and style the UI components.
- RxJS: Utilized for handling asynchronous data streams in Angular.

## Project Structure

- src/app/currency-converter: Contains the components and templates responsible for the currency converter functionality.
- src/app/exchange-rate.service.ts: A service responsible for fetching exchange rates from an API.
- src/assets/icons: Contains currency images displayed in the dropdown menus.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
