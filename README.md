# Email Sender

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#init-database">Init database</a></li>
        <li><a href="#project-start">Project start</a></li>
      </ul>
    </li>
    <li>
      <a href="#project-routes">Project routes</a>
      <ul>
        <li><a href="#get-orders">GET order</a></li>
        <li><a href="#get-orders-id">GET orders/:id</a></li>
        <li><a href="#post-orders">POST orders</a></li>
        <li><a href="#patch-orders-id">PATCH orders/:id</a></li>
        <li><a href="#delete-orders-id">DELETE orders/:id</a></li>
      </ul>
    </li>
    <li>
      <a href="#suggestions-and-features">Suggestions and features</a>
    </li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

## About The Project

This project is part of a technical round. Project demonstrates:
- CRUD operations on table **orders** in _api_ branch 
- simple **JWT authentization** in _jwt_

### Built with

- Visual Studio Code
- NodeJS v18.16.0
- NestJS 10.2.0
- Docker 25.0.3
- Postman (TBA in _api_ branch)

### Getting started

#### Prerequisities

- NodeJS v18.16.0
- NestJS 10.2.0
- Docker 25.0.3

#### Init database

1. Create `.env` file and fill it with variables (variable names are included in `.env.example` file ). 
2. Start Docker, if you do not have it started
3. Open terminal
4. Run command `docker compose up --build`

After these steps you should be able to connect to database with created empty table `orders` in Docker container.

For stopping project simply press `ctrl + c` in terminal.

#### Project start

1. Create `.env` file and copy variable values from `.env.example`, you can add you own variable values here
2. Install packages with `npm i` in command line
3. If you do not have started docker (section Init database), start it (you do not need then configure database)
4. Run project with `npm run start` in command line.

### Project routes

#### GET orders

This route will get all orders.

#### GET orders/:id

This route will get order by its id.

#### POST orders

This route will create order.

#### PATCH orders/:id

This route will update existing order.

#### DELETE orders/:id

This route will delete existing order (soft delete).

### Suggestions and features

### Author

- Name: **Pavel Sedlář**
- <a href="https://www.linkedin.com/in/pavel-sedl%C3%A1%C5%99-574039117/">LinkedIn Profile</a>
- <a href="https://github.com/pauwelcz/objedname_task">Github repository</a>