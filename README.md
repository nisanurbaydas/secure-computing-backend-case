# Secure Computing Backend Case

A RESTful API with a 5 endpoint that make CRUD operations in the provided MongoDB collection and return the results in the requested format. Project has multi-layer architecture.
### Requirements

- [x] OOP principles is applied
- [x] Jsdoc (swagger-jsdoc) code documentation is written
- [x] Unit test applied
- [x] Swagger integration
- [x] Other config/env/documentation files
- [x] Writing clear code

## Getting Started
Clone the repo:

```
git clone https://github.com/nisanurbaydas/secure-computing-backend-case

cd secure-computing-backend-case
```
Install the dependencies:
nodemon and prettier are used as development dependencies

```
npm install
```
To start project:
```
npm start
```
To run test:
```
npm run test
```
## Project Structure
```
src\
 |--config\         # configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--errors\    
 |--loaders\        # Db connection
 |--middlewares\    # Custom express middleware (Error handling and ID checker)
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--test\           # Testing frameworks
 |--app.js          # Express app
 ```
## API Documentation
### API Endpoints
List of available routes:
````
GET /tasks         - all tasks
GET /tasks/:id     - specific task with its id
POST /tasks        - create a new task
PUT /tasks/:id     - update a specific task
DELETE /tasks/:id  -delete a task with its id
````
POST request example:
````
{
 "name": "Learn about NodeJS",
 "status": "backlog",
}

````
 Request Parameters:
|  Parameters | Type  | Description   |
| ------------ | ------------ | ------------ |
|  id |  String | Auto generated by MongoDB  |

 Status Codes:
|  HTTP Status Code |  Explanation   |
| ------------ |  ------------ |
|  200 |  Success  |
|  201 |  Created  |
|  400 |  Bad Request  |
|  404 |  Not found  |
|  500 |  Internal Server Error  |

## Application structure
![structure](https://user-images.githubusercontent.com/36813009/212486214-6f528bd2-98f8-46a5-8224-8283d578436f.png)


### Swagger URL
http://localhost:3000/api-docs/#/
