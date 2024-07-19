# BackEndECommerce

## Description
Create a robust back end for an e-commerce site using Express.js and Sequelize to interact with a MySQL database. This project demonstrates the essential architecture and operations of an e-commerce platform, allowing for effective management of product, category, and tag data.

What was your motivation?
To understand the fundamental architecture of e-commerce platforms and to develop a scalable back-end solution.
Why did you build this project?
To gain practical experience with building a full-featured back-end using modern web technologies.
What problem does it solve?
It provides a foundational back-end framework for managing an e-commerce site, supporting essential CRUD operations and data relationships.
What did you learn?
Learned how to integrate Sequelize with Express.js and MySQL, and how to create and manage relational databases.
What makes your project stand out?
Comprehensive implementation of an e-commerce back end with robust RESTful APIs and thorough demonstration of functionality through a walkthrough video.

Table of Contents
Installation
Usage
Credits
License
Badges
Features
How to Contribute
Tests

Installation
Clone the repository:
git clone git@github.com:MagsZavala/BackEndECommerce.git
Navigate to the project directory:
cd BackEndECommerce
Install NPM packages:
npm install
Create a .env file and add your MySQL credentials:
env
Copy code
DB_NAME='your-database-name'
DB_USER='your-mysql-username'
DB_PW='your-mysql-password'
Create the database:
Copy code
mysql -u root -p < db/schema.sql
Seed the database:
Copy code
npm run seed
Start the server:
Copy code
npm start

Usage
Start the server and open API GET routes in Insomnia for categories, products, or tags to display the data in a formatted JSON.
Test API POST, PUT, and DELETE routes in Insomnia to create, update, and delete data in the database.

Packages:
MySQL2
Sequelize
dotenv
License
This project is licensed under the MIT License. See the LICENSE file for details.


Features
Full CRUD operations for categories, products, and tags.
Sequelize ORM for database interaction.
Environment variable management with dotenv.
Comprehensive API testing through Insomnia.

How to Contribute
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows best practices and includes descriptive commit messages.

Tests
Currently, there are no automated tests for this application. However, future improvements will include unit tests for key functionalities.