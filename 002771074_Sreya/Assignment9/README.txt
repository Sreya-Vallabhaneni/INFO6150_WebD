This is a react website for residensce hotel 
The llanding page is a login page 
It has 3 user input fields, there is no sign up form as the login credentials have been added in the backend in mongodb copass manually. 

assignment-9 folder has all the react componensts which consisits of 5 pages
Login 
Home
About 
Jobs 
Contact 

Controllers: user.controller.js
Node.js code for a simple authentication system with basic validation checks. 
It uses the Express framework to create routes and Mongoose library to connect to a MongoDB database.
 The authentication system has three main functionalities - user registration, user login, and retrieving all users.
  It also uses the bcrypt library to hash and compare passwords.

The code has four functions:
loginuser: This function is called when a user tries to login. 
It first validates the email and password entered by the user.
 If they are valid, it searches for a user with that email in the database. 
 If a user is found, it compares the password entered by the user with the hashed password
stored in the database using the bcrypt library. If the passwords match, it sends a "Login successful" 
message to the client, otherwise it sends an "invalid credentials" message.

userpost: This function is called when a user tries to register. 
It validates the name, email, and password entered by the user. 
If they are valid, it creates a new user in the database using the UserService.createuser function.

getAlluser: This function is called when the client requests to retrieve all users from the database. 
It uses the UserService.getusers function to retrieve all users from the database.

editusers: This function is called when a user tries to edit their profile.
 It validates the name, email, and password entered by the user. If they are valid, it updates the user's information in the database using the UserService.updateuser function.



Models->user.models.js:

Node.js module that defines a Mongoose schema for a user object with name, email, and password fields. 
It also exports two methods: addUser and updateUser, which take a user object and a callback function as arguments.

The addUser method first generates a salt with 10 rounds,
 then hashes the user's password with the salt using the bcrypt library. 
 The hashed password is then saved to the user object, and the user is saved to the database. 
 If there are any errors during this process, the callback is called with an error message.

The updateUser method is similar to addUser, but it first generates a new salt and hashes
 the user's password with the new salt before saving the user object to the database.

routes->user.routes.js:
This is a router module for a user management system using Express.js.
It defines several HTTP routes that map to various user management functions implemented 
in the user.controller.js module.

POST /Logintest: This route is used to authenticate a user based on their email and password. 
It calls the loginuser function in the user.controller.js module.

POST /user/create: This route is used to create a new user. 
It calls the userpost function in the user.controller.js module.

GET /user/getAll: This route is used to get a list of all users.
 It calls the getAlluser function in the user.controller.js module.

PUT /user/edit: This route is used to edit an existing user. 
It calls the editusers function in the user.controller.js module.

DELETE /user/delete: This route is used to delete an existing user. I
t calls the deleteuser function in the user.controller.js module.

Services-> user.services.js
createuser: This function creates a new user in the database. It first checks whether a user with the given 
email already exists, and if so, it returns an error. Otherwise,
 it creates a new User instance with the given name, email, and password, and saves it to the database using 
 the User.addUser method.

getusers: This function retrieves all users from the database using the User.find method, 
and returns them in the response.

updateusers: This function updates an existing user in the database. It first checks whether a user 
with the given email exists, and if not, it returns an error. Otherwise, it updates the user's name 
and password with the given values, and saves the changes to the database using the User.findOneAndUpdate method.

removeuser: This function deletes a user from the database. It first checks whether a user with the given 
email exists, and if not, it returns an error. Otherwise, it deletes the user from the database 
using the User.delete method.


code is structured in a way that follows the Model-View-Controller (MVC) pattern, 
which is a common design pattern used in web applications. Your user.controllers file contains the controller
 functions that interact with the User model, while your user.route file defines the routes 
 that map to these controller functions.

 REACT COMPONENTS 

login.js
 This is a React functional component called Login that defines a login form. 
 It imports React, useState, useNavigate, and renderMatches from the react-router-dom library.

The component uses the useState hook to create state variables for name, email, password, nameError, 
emailError, passwordError, and MessageError. It also uses the useNavigate hook from react-router-dom
 to handle navigation.

The component defines a handleSubmit function that is called when the login form is submitted. 
This function calls the validate function to check if the form inputs are valid. If the inputs are valid, 
it calls the login function to submit the form data to the server. If the inputs are not valid, it returns false.

The validate function checks if the name, email, and password fields are empty or if the email and 
password fields are valid using regular expressions. It sets the nameError, emailError, and 
passwordError state variables based on the validation results. It returns true if any validation 
errors are found, otherwise it returns false.

The login function creates an object with the name, email, and password values and sends it to the server using
 the fetch API. It then checks the response from the server and sets the passwordError and MessageError 
 state variables based on the response status. If the response status is OK, it navigates to the home page.

The Login component returns a login form with input fields for name, email, and password. 
It also displays error messages for the nameError, emailError, passwordError, and MessageError state variables. 
The form is submitted using the handleSubmit function when the submit button is clicked.

Home.js
This is a React component called "Home" that renders a navigation bar using Bootstrap and React Router. 
It also renders a card that displays some information about a hotel in Boston, along with two images. 
Additionally, it displays some contact information in a separate section.

The navigation bar includes links to four different routes: "/Home", "/Aboutus", "/Jobs", and "/Contact". 
Clicking on these links will render different components based on the routes specified in the <Routes> component. 
The <Route> components specify the paths and the corresponding components to be rendered.

The card contains two images and some descriptive text about the hotel. 
The contact information is displayed below the card in a separate section.

About.js
 It imports several components from React Bootstrap and other components from other files. 
 It also imports images and the React Router.

Inside the function, there is an array called cardItems that contains objects representing 
information about different types of suites available. Then, there is a map() function that iterates over 
this array and creates a Card component for each object. Each card displays an image, a description, 
and has a different color background depending on the type of suite.

The function returns several components wrapped in the <> tags, including a Navbar,
 a Routes component that defines the routes to other pages, and the cardDom variable, 
 which contains the dynamically generated Card components. Finally, there is a div element that displays 
some contact information.

Jobs.js
It is importing several dependencies, including React, Bootstrap components, and images.
 The component is rendering a navigation bar using the React Router package to link to other pages, 
 such as Home, Aboutus, Contact, and Jobs.

It also contains a card-based layout to display information about various hotel job positions, 
including hotel general manager, food and beverage manager, concierge, and housekeeping staff. 
Each card includes an image, job title, and description of responsibilities.

Finally, the component includes a section for contact information, which includes a phone number, address,
and email for customers to book and inquire about job positions.

Contact.js
This code defines a React component called Contact which renders a page for contacting Marriott hotels. 
It imports several modules from the react-bootstrap library and react-router-dom. 
The component renders a navigation bar at the top of the page with links to the home page, about us page,
 jobs page, and logout functionality. It also renders an image and some text in a dark-themed Card component, 
 which includes the contact information for Marriott customer service.

The component also includes a Routes component from react-router-dom which defines the routes for the different
 pages in the app. It includes routes for the home, about us, jobs, and contact pages.







