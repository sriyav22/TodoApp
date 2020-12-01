# Assignment 9

## Todo App features using REST API

    - Fetch all existing todo items from the database.
    - Click on a todo item to see detailed view.
    - Add a todo item to the database.
    - Update a todo item in the database.
    - Mark a todo item complete.

## Approach

    - Developed each of the endpoints using the express framework.
    - Used MongoDB for a persistence layer
    - Using the HTTP POST method to add a todo item and HTTP GET to fetch all the todo items from the database and siplay on the UI
    - Using the HTTP UPDATE method, updated a todo item which is here achieved by marking the todo item complete.

## Execution

    - Clone the repositiory using the "git clone" command.
    - First step is to convert it to a npm project, for that run the "npm init" command. 
    - Install using the "npm install" command.
    - Install express using the "npx express-generator --no-view" command.
    - Then run "npm install --save @babel/core @babel/cli @babel/preset-env nodemon rimraf npm-run-all". This command is to convert the ES6 syntax to the erquired syntax.
    - Install mongoose using "npm i --save mongoose" command.
    - After this would be the step to create the react app, this can be achieved by running the "npx create-react-app todoapp".
    - The server part of the project can then be run with the "npm run dev" command.
    - The react app can then be run with the "npm run start" command
