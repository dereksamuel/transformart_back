# Transform Art
TransformArt is a business of art, that transform your art or every product that you want in something unique, that will transform your future in a better future, at least in something more beautiful.

## Before the usage
Before of all, please create a .env.dev file and if you want run this application on a prod environment create too the .env file
in this route: ./

* Content of .env file:
  ENVIRONMENT=prod
  PORT=4000

* Content of .env.dev file:
  ENVIRONMENT=dev
  PORT=4000

## Usage (run this commands in the terminal)
  ### Tests
    ```js
      npm run test
    ```
  ### Develop
    ```js
      npm run dev
    ```
  ### Prod
    ```js
      npm start
    ```

## Dependencies of this project

1. express-session
  This will be the controller of my login sessions with express.

2. mysql
  This give permission to connections of sql and my app, (that is ideal for do successfully queries).

3. express-mysql-session
  A module that insert of sessions in the database, no in the server -> For production.

4. morgan
  It allows create logs or messages of what my applications are requesting to the server.

5. bcryptjs
  This module will we use for encrypt the passwords of our users before of save in the database.

6. passport-local
  For Do all authentication of local way(with email and password).

7. connect-flash
  Will we use this module to show an error and success messages when the user do an any operation.

8. express-validator
  Automatization when we validate the format of emails, etc, passwords, the real values of our information.

9. supertest
  An application for unit testing to express
  