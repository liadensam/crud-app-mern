# CRUD Application 💻

<br>

I created a blog page - [CRUD application](https://budibase.com/blog/crud-app/), where users can login/logout, write article, edit or update the article, delete the article, read articles. At first I needed to set up the backend and the database. I used [MERN stack](https://www.mongodb.com/mern-stack). Then I create the front-end and connected it all together.

There is a Walkthrough at the end 👇 of this Readme file (wait for the gifs to load).

<br>

<img src="/assets/blog-home.png">

<br>

## Backend

- all the backend is in `api` folder

- I created a MongoDB account and then database user. In the **Cluster** I clicked on **connect > Connect your application** and copied the code for connecting to my database.

- `.env` file has my `MONGO_URL =`which you need to create and past your own from your database user

- I tested all the routes, methods and messages in [Postman](https://www.postman.com/).

- to run the backend using (and being in the right folder ~ api):

```sh
npm start
```



### Register

<br>

<img src="/assets/register.png">

<br>


### Login

<br>

<img src="/assets/sucess-login.png">

<br>

<br>

<img src="/assets/wrong-login.png">

<br>


### Mongo DB database ~ users registered

<br>

<img src="/assets/database-user.png">

<br>

<br>

<img src="/assets/users-database.png">

<br>


### Update user

<br>

<img src="/assets/update-user.png">

<br>

<br>

<img src="/assets/user-update-own.png">

<br>


### Mongo DB database ~ user updated

<br>

<img src="/assets/database-updated-user.png">

<br>

### Mongo DB database ~ posts

<br>

<img src="/assets/posts-database.png">

<br>

<br>


## Frontend

- all the backend is in `client` folder

- I am using React for the frontend

- to run the frontend use:

```sh
npm start
```

<br>


## Run it on your computer

- First create database user

- Clone the repository:


```sh
git clone https://github.com/liadensam/blog.git
```

<br>

- Go to the folder


```sh
cd blog
```

<br>

- Install all dependencies with:

```sh
npm install
```

<br>

- create .env file
- go to the Mongo DB and copy the code for the database connection
- use the variable `MONGO_URL` and paste your code

<br>

- Run the backend on one terminal going to the right folder and using:


```sh
cd api
```

<br>


```sh
npm start
```

running on [http://localhost:5002](http://localhost:5002)


<br>

<img src="/assets/mongo-backend-connect.png" width="200">

<br>



- Run the front-end separate on another terminal going to the right folder and using


```sh
cd client
```

<br>

```sh
npm start
```

<br>

<br>


### Walkthrough

<br>



<br>



