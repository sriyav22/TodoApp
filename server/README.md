# BackendApi

## Todo App features using REST API

    - Fetch all existing todo items from the database
    - Add a todo item to the database.
    - Update a todo item in the database.
    - Delete a todo item from the database.

## Approach

    - Developed each of the endpoints using the express framework.
    - Used MongoDB for a persistence layer
    - Using the HTTP POST method to add a todo item and HTTP GET to fetch all the todo items from the database 
    - Using the HTTP UPDATE method, updated a todo item which is searched by the unique id.
    - Using the HTTP DELETE method, delete a todo item which is searched by the unique id.

## Execution

    - Clone the repositiory using the "git clone" command.
    - First step is to convert it to a npm project, for that run the "npm init" command. 
    - Install using the "npm install" command.
    - Install express using the "npx express-generator --no-view" command.
    - Then run "npm install --save @babel/core @babel/cli @babel/preset-env nodemon rimraf npm-run-all". This command is to convert the ES6 syntax to the erquired syntax.
    - Install mongoose using "npm i --save mongoose" command.
    - The project can then be run with the "npm run dev" command
    - Any api client like Postman can be used to hit the apis defined in the project.
