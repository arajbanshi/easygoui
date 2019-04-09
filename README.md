# EasyGoUi
This is the ui for the GoEasy app. This application helps you get metrics for your commute between 2 boroughs in NYC. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8. This application uses api found in https://github.com/arajbanshi/goeasy.git. Clone this app, run npm install to install all the dependencies and then run npm start to start the application. Make sure you have Nodejs and Angular Cli installed before running this application. This application also uses angular environment files to set the environment variables. Make sure you have the value set in the right file before running the application for that environment.

Steps to get this application running:
1. Clone the api at https://github.com/arajbanshi/goeasy.git
2. build and run the api
3. upda the environment.ts with the api url.
4. run ng serve to run the application. 

TODO: 
1. Make the application more attractive.
2. Add a cross instead of a button to close the messages
3. use some other phrase instea of "data not available"
4. add authentication (OIDC? host in Azure? B2B? B2C?)
5. build a CI/CD pipeline for automated builds

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
