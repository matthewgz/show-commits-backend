# Github API integration to show commits

This project consumes the GitHub API to obtain the commits made in this project and that of the show-commits-frontend repository.

To carry out this, the NestJS framework was used. Which gives us various tools for a good documentation of the endpoints and on the other hand tools for data validation.

The functionalities that the project has is to show the repositories, obtain a specific repository and obtain the commits from a repository. The latter has some parameters that make pagination possible in the frontend part.

For more details on the endpoints, start the project and enter the documentation in the following path [http://localhost:3000/docs/]().

## Installation

1. For installation, you will first need to clone this project on your workstation.

2. Once the project is cloned, you must enter the project using a terminal and execute the following command to complete the installation.

```bash
npm install
```

## Configuration

Before starting the project make sure the `.env` is correctly configured. Copy `.env.example` and consider these values:

```bash
# Place the GITHUB API
GITHUB_API='https://api.github.com/'
# Place the generated token with the github account
GITHUB_TOKEN='xxxxxxxxxx'
```

The `GITHUB_API` variable should not change, but the value of the `GITHUB_TOKEN` variable should be a valid one. This token will be provided by mail and should be placed there.

## Available Scripts

In the project directory, you can run:

`npm run start:dev`

Runs the app in the development mode. You can consume the endpoints on the route http://localhost:3000.
The project will reload if you make edits.

`npm run test:watch`

Launches the test runner in the interactive watch mode.

`npm run test:e2e`

Launches the end-to-end test runner.
