# Online Library API
Welcome to the online library API project repository. This is a project for practicing purpose.

# About
This project is a practice app to build a REST API of book. This project is divided in a express app where the API is built and a React-based app that connect to the API and show the books to the client.

# Technologies
+ Express js for the backend
+ Postgres as DB
+ React for the frontend
+ node-postgres (pg) for database configuration
+ postgres-node-migration for migration

# Getting Started
Before start, you should have installed and configured postgres db on your computer.

1. Clone this repository.
2. Navigate to the `server` directory.
3. Install node dependencies `npm install`.
4. Configure your credential creating an `.env` file and updating your configuration.
5. Run the command `npm run create-db` to create the database.
6. Run the Migrations and seeder `npm run migrate up`.
7. Run the server `npm run dev`.
8. Navigate to the `client` directory.
9. Install node dependencies `npm install`.
10. Run the `client` `npm run dev`.