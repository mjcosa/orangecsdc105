
“Orange”
Fullstack Social Media Project
In partial fulfillment of the requirements for
Trends in Application Development






Professor

Angelo Melecio O. Agawa



Proponents

Mcleilan Jay I. Cosa

Project Overview

This project - “Orange” is a full-stack social media application built with the MERN (MongoDB, Express.js, React, Node.js) stack. The purpose of this application is to provide an environment for people to express themselves freely and free of judgement. The application also provides an environment for people to have a space to keep their “Journal Entries” that they are willing to share with other people. The main features of the application includes:

User Authentication (Register, Log-in, and Sign-out)
CRUD Operations:
Create Accounts
Create Posts
Retrieve user information
Retrieve user posts
Update user information
Delete post
     - 	Uploading and Retrieving of Pictures


Technologies Used

Frontend
React: Component-based UI


Redux Toolkit: State management


Redux Persist: To persist user sessions


React Router DOM: Routing


Material UI (MUI): Responsive and modern UI components


Backend
Node.js: Runtime environment


Express.js: REST API framework


MongoDB: NoSQL database


Mongoose: ODM for MongoDB


JWT (JSON Web Tokens): Authentication

Setup Instructions
Clone the repository:
git clone https://github.com/mjcosa/orangecsdc105.git
cd orangecsdc105

Install Dependencies:
cd backend
npm install
	cd client
	npm install
 
Setup Environment(env) variables
Create a .env file in the server folder and paste the following:
MONGO_URL='mongodb+srv://mjcosa:KuVYFdqhXbZC3c88@cluster0.gfvszir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
JWT_SECRET='verysuperhardpasswordtoguesssssss'
PORT=3001

Run the App
cd backend
node server
cd client
npm run start
Folder Structure

Backend folder:
	controllers - Functions that handles the logic for the routes
	data - Fake data to initially feed the database
	middleware - Middleware functions
	models - Mongoose data schemas or models
	public - Static public assets
	routes - Express.js Route handlers

Frontend/client folder:
	public - Static public assets
    assets - public assets
	src - Source codes in the frontend
    components - Reusable UI Components
    scenes - User Interface Sections
    state - Houses the redux slice, store setup and redux store configuration

Code Explanations
Backend code key components:

Mongoose setup to connect the project into the MongoDB. This is essential to store user information and store the social media posts, likes, and comments

Multer middleware code, a necessary component for the implementation of uploading, storing, and retrieving of pictures

JWT or jsonwebtoken middleware, a necessary component to keep track of the token or user authentication whether it will be allowed access to the functionalities of the application

Schema for the user posts in the application. This serves as the blueprint for what information or what scope does the application covers concerning the “social media post” functionality of the application

Schema of the Users. This serves as the blueprint of the expected information to be received from the users, and the information to be stored in the database of the application.


Frontend code key components:
Register functionality using bcrypt middleware to encrypt the account password of the users

Log in functionality using bcrypt middleware for checking if the password matches, and JWT token to provide authentication of the user.

Basic frontend routes for easy navigation

A reduxjs slice middleware to simplify the the implementation of states in an application such as theme, and user authentication

A reusable UI component using the mui framework for easier and efficient implementation of User Interface design


Challenges Faced:

Dependencies version compatibility
Some dependencies were outdated and are conflicting with other dependencies that are up-to-date preventing the code from working. It was resolve through uninstalling the modules and dependencies and installing the versions that are compatible with each other manually


Future Improvements:

Improving User Interface Design to provide a more modern and captivating look

Adding functionalities such as editing post, posting multiple photos, and messaging


