# Whiteboard

A place for developers to blog and connect


### Prerequisites
NVM
Node 7.7.4+
PostgreSQL

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

nvm install node

```

### Installing

Clone the repo

```
git clone https://github.com/mottola/whiteboard_api.git

cd whiteboard_api

npm install
```

Copy `example.env` to .env

```
cp example.env .env
```

Edit .env based on your desired port and psql setup


Run the DB setup script

```
psql -f local_db_init.sql
```

## Run the server

```
nodemon app.js
```


## Authors

**Rick Mottola**

See also the list of [contributors](https://github.com/will/edit/later) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
