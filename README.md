# Trellis Quality Assurance Exercise

This exercise is designed to assess how you approach tasks that will be required in our QA position.

Please fork this repository and commit changes you make. Once completed, provide Trellis access.

## The Application

This code repository contains a sample application that needs to be tested. The
application allows adding and removing items from a list and marking an item as complete.

## Exercise Requirements

With the provided Angular application, perform the following:

### Manual Testing
1. Write a test document for testing adding a new item, deleting an item and marking an item
   as completed.


### End to End
1. Using Cypress, write some automated tests of your scenarios. A cypress project is created for you in
   `app/todo-e2e`.

### Unit
1. Using Spectator and Jest, write a component level test for any angular component. The components can be found in `libs/ui`.

2. Using Supertest and Jest, write an integration test for the API app. The project is hosted in
`app/api`.

We are interested in how you approach these tasks than the final result.

## Running the Application

This is a [Angular](https://angular.io/)
project using [NX](https://nx.dev/angular/getting-started/why-nx). To run the application on your machine,
you will need:

- NodeJS https://nodejs.org/en/
- Yarn https://yarnpkg.com/en/

With those pre-requisites installed, follow these steps to run the application:

1.  Clone the git repository to your machine
2.  Inside the repository, run `yarn install`
3.  Inside the repository, run `yarn nx s todos`
3.  Inside the repository, run `yarn nx s api`

This will open the application in your default web browser at
http://localhost:4200.

## Running the Test Framework

NX integrates [Cypress](https://www.cypress.io/) by default. You can find the test files in
`app/todos-e2e/src/integration` The test suite can be run with:

```sh
yarn nx e2e todos-e2e --watch
```
