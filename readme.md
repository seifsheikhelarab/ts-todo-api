# Todo API

A simple Todo API built with Typescript, Express.js and MongoDB.

## Table of Contents

* [Getting Started](#getting-started)
* [API Endpoints](#api-endpoints)
* [Database](#database)

## Getting Started

To get started with the API, follow these steps:

1. Clone the repository: `git clone https://github.com/seifsheikhelarab/ts-todo-api`
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:

* `PORT`: the port number to listen on (default: 3000)
* `MONGO_URI`: the MongoDB connection string

4. Start the server: `npm start`

## API Endpoints

The API has the following endpoints:

* `GET /todos`: retrieve a list of all todos
* `POST /todos`: create a new todo
* `GET /todos/:id`: retrieve a single todo by ID
* `PUT /todos/:id`: update a single todo by ID
* `DELETE /todos/:id`: delete a single todo by ID

## Database

The API uses a MongoDB database to store todos. The database connection string is stored in the `MONGO_URI` environment variable.
