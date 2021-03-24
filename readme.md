## User Authentication Application

A simple rest api used to user authentication.

Access live : https://node-user-auth.herokuapp.com/

### How run the apps :

#### 1. Clone the apps
```
$ git clone https://github.com/SutantoAdiNugroho/node-user-auth.git
```
#### 2. Install dependencies
```
$ npm install
```
#### 3. Ensure that your MongoDB is running locally
For example we will running on Linux

Start :

```
$ sudo service mongod start
```

See the status :
```
$ sudo systemctl status mongod
```

#### 4. Launch the apps
```
$ npm run dev
```

### Documentation API

#### /api/auth

| Path            | Method | Description   |
| :---            | :---:  | :---          |
| /users/login    | POST   | User login    |
| /users/register | POST   | User register |

#### /api/profile

| Path              | Method | Description                            |
| :---              | :---:  | :---                                   |
| /users            | GET    | Show all user that has been registered |
| /user/:id         | GET    | Show one specific user by id           |
| /modify/user/:id  | PUT    | Edit one specific user                 |
