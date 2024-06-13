# Email Sender

- [About The Project](#about-the-project)
   * [Built with](#built-with)
   * [Getting started](#getting-started)
      + [Prerequisities](#prerequisities)
      + [Init database](#init-database)
      + [Project start](#project-start)
   * [Project routes](#project-routes)
      + [GET orders](#get-orders)
      + [GET orders/:id](#get-ordersid)
      + [POST orders](#post-orders)
      + [PATCH orders/:id](#patch-ordersid)
      + [DELETE orders/:id](#delete-ordersid)
   * [Suggestions and features](#suggestions-and-features)
      + [Pagination and limit](#pagination-and-limit)
      + [Sorting](#sorting)
      + [Filtering](#filtering)
   * [Author](#author)

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

#### Pagination and limit

In case of multiple orders, I would suggest adding limit and offset. Limiting should also pretend database overload when we have for example orders in the order of millions.

#### Sorting

For a clearer display of orders, I would add sorting (in this case by id, order status, or creation date).

#### Filtering

Also for a clearer display of orders, I would filtering (by its status, potentially user can check multiple boxes).

### Author

- Name: **Pavel Sedlář**
- <a href="https://www.linkedin.com/in/pavel-sedl%C3%A1%C5%99-574039117/">LinkedIn Profile</a>
- <a href="https://github.com/pauwelcz/objedname_task">Github repository</a>