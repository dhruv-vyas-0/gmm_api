
# gmm_api

My API to interact with the database of my college project.
This README includes all the steps necessary to get this project running on your computer. (It is for my team members. : ))

#### Setting up database
- Make sure you have mysql-server installed and running.
- create a new database by `CREATE DATABASE databasename;`
- Make all the tables from `misc/tables.sql` file. Just copy the whole file and paste it into your mysql terminal.
- Create necessary triggers by copying `misc/triggers.sql`  file into your mysql terminal.
- Database is ready.

#### Setting up project
- Make sure you have `nodejs` and `npm` installed.
- Clone this repository to your computer. Just do `git clone https://github.com/dhruv-vyas-0/gmm_api.git`
- Go into `gmm_api` direcory and open a terminal.
- Now type `npm install`. This will install all the dependencies required by the project.

#### Setting up environment variables
- create a `.env` file into the main `gmm_api` directory.
- Copy below given text and replace appropriate values.
````
SERVER_PORT=6789
DB_HOST='localhost'
DB_PORT=ENTER_YOUR_MYSQL_SERVER_PORT
DB_USER='ENTER_YOUR_MYSQL_USERNAME'
DB_PASSWORD='ENTER_YOUR_MYSQL_PASSWORD'
DB_DATABASE='NAME_OF_DATABASE_YOU_CREATED'
````

#### Running the API
- If you did everything alright, you can start API server by typing `node app.js` into the terminal of `gmm_api` directory.

#### Play around with the API
- I have included `thunder_client_endpoint` directory to the repo.
- You have to install thunderclient extension in VSCode and import the collection files given in that folder.
- Now you can test various end points and methods with this API.
- You can also login to your mysql server to see the changes in database. ;)
