
# LeoVegas tech test Backend

This is my tech test submition for the LeoVegas TechTest,
a RESTful API for getting users and changing account balances
The back end api can be found hosted on [Heroku](https://transactionsexample.herokuapp.com/)
and is to be used with the [frontend](here).

The Backend uses the following

+ nodeJs
+ pouchDB as the in memory server (loaded from the transactions folder)
+ Express as the webserver 
+ dotEnv to store the port variable

## Installation

If needed to install the project locally run open first clone the project then

```bash
    git clone https://github.com/continuum-web/transactionExample-backend.git
```
Then open a terminal in the project directory and install the dependencies

```bash
    npm install
```
create the following in a .env file in the root of the project 
```
    PORT=9000
```

The Express server can then be started using the node script 
```bash
    npm run start
```

### Database 
 the database for the project uses pouchDB and is stored in the transactions folder of the project
 to reseed the database with new users delete the transactions folder and run

 ```bash
    npm run seedDB
 ```
    
## API Reference

#### Get all users

```http
  GET /api/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  none | None   | The default Route to get a list of all users  |

#### Get a single user

```http
  GET /api/users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Alter a users balance

```http
  GET /api/users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |
| `Body`      | `object` | **Required**. an object of the type and amout|

```js
{"type":"credit", "amount": 10}

```

or 

```js
{"type":"debit", "amount": 10}

```


