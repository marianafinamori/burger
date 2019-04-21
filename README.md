# burger
DESCRIPTION
An application that allows user to create, store, delete and update a burger name in a database. Using a simple form, the user can submit the name of a burger to a list. By clicking a button "devour it" can move the burger to another list of devoured burger or delete any burger that is no longer wanted.

REQUIREMENTS
Create a burger logger with MySQL, Node, Express, Handlebars and a ORM (create ORM) following MVC design pattern; use Node and MySQL to query and route data in the app and handlebars to generate HTML

TECHNOLOGIES 
- Javascript
- Node.js
- MySQL
- npm express
- npm handlebars

CODE EXPLANATION
- used schema.sql and seeds.sql to generate database
- following MVC design patter, created ORM to access my sql database. 
- using the ORM created a model to manage the database and receive the inputs from the controller
- then created a controller file to stablish routes and the interactions between user inputs and the database
- HTML is generated dynamicly with handlebars



