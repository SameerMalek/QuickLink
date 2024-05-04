# QuickLink
As the name suggests, this project is made to create a shorter version of a url to make it more simpified to use it while searching a site.
# What it does?
This project craetes a short id for the provided url that can be further used to search that URL. It uses an npm-package called "shortid" to create a short unique id for a provided url.
# What problem it solves?
The main motive of creating this project is to eliminate problem that I faced in my daily life that is typing multiple long urls provided at my college on a daily basis because I suffered making typing errors and so I decided to make this project that would make it easier and also aesthetic for me to search a url using its shorter version and avoid typing errors.
# How I built it?
I built this project using <b>MongoDB, Express ,EJS(with BootStrap), Nodejs</b>. Firstly, I started with backend with Nodejs and then frontend server-side rendering with EJS. Firstly I created a Nodejs Server and then I continued with building logic and followed <em>MVC (model-view-controller) model</em> throughout the project to keep the project code neat and easy to read. Further I did the server-side part and I used Bootstrap with EJS. Then went to backend and created url Schema in MongoDB using mongoose package after that I made the routes of that site with the help of Expressjs and verified the routes using <b>Postman</b>.Then I made registration/signup page, made "users" Schema and routes and connected it and repeated the same process with login page also.Lastly I added JWT Authentication to signup and login pages.
# Dependencies:
<h2>Backend:</h2>
<b>- express</b><br>
<b>- mongoose</b><br>
<b>- nodemon</b><br>
<b>- ejs</b><br>
<b>- uuid</b><br>
<b>- cookie-parser</b><br>
<b>- jsonwebtoken(jwt)</b><br>
<b>- shortid</b><br>
