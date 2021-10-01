TRAX LRS
========

## About this software

TRAX LRS is a Learning Record Store which conforms with the lastest [xAPI specification](https://github.com/adlnet/xAPI-Spec)
and has been [certified by ADL](https://adopters.adlnet.gov/products/search/trax/0).
It has a minimalist set of features, but can be extended by anyone who has <a href='https://laravel.com/' target='_blank'>PHP/Laravel</a> programming skills.


## Use cases

### Web App vs Pure API

- **Web App:** TRAX LRS offers an xAPI compliant API, as well as a user interface (UI) which may me used to manage the API clients, to explore xAPI data, and much more. The UI access is secured by an authentication system.

- **Pure API:** TRAX LRS may be used as a pure xAPI compliant API, without any user interface. In order to support this scenario, TRAX LRS offers a set of commands that you may use directly in your console.


### Database scenarios

- **Relational database:** most modern relational databases now support the JSON format which may be used to store xAPI data. TRAX LRS offers several options in order to support this scenario: *MySQL*, *MariaDB* and *PostgreSQL*.

- **NoSQL database:** NoSQL databases may also be a good choice as they natively deal with the JSON format and offer a high level of scalability. In order to support this scenario, TRAX LRS may be used with *MongoDB*.

- **Hybrid database:** in some specific cases, it may be relevant to use an hybrid solution. With TRAX LRS, you can use a NoSQL database to store xAPI data, and a relational database to store everything else, including user accounts and related data (e.g. roles & permissions, groups, etc). 


## Server requirements

- **Apache 2.4** with *mod_rewrite* activated.

- **Database**, depending of your scenario:

    - *MySQL 5.7.19+* (except *MySQL 8*)
    
    - *MariaDB 10.2.8+*
    
    - *PostgreSQL 10.3+*
    
    - *MongoDB 3.6.3+*

- **PHP 7.1.9+** with the following extensions (both Apache and CLI!):

    - *OpenSSL*, *Mbstring*, *Tokenizer*, *XML*, *Ctype*, *JSON*, *Curl*, *BCMath*, *Exif*

    - *PDO_MySQL* if you want to use MySQL or MariaDB.

    - *PgSQL* and *PDO_PgSQL* if you want to use PostgreSQL.

    - *MongoDB* if you want to use MongoDB.

- **Composer** to install and update the application.


## Installing the application


### Cloning the application

To simplest way to clone the application is to use the Composer `create-project` command in your terminal. The following example installs the application in a directory named *traxlrs*: 

    composer create-project --prefer-dist --stability rc trax/lrs traxlrs


### Directory permissions

After cloning the application, you may need to configure some permissions. Directories within the `storage` and the `bootstrap/cache` directories should be writable by your web server or TRAX LRS will not run.


### Public directory

After cloning the application, you should configure your web server's document / web root to be the `public` directory. Other directories should not be accessible for security reasons.


### Creating the database

Create an empty database with a **utf8mb4_unicode_ci** encoding.


## Configuration

At the root of your application, you should find a file named `.env`. If this file does not exist, copy and rename the `.env.example` file. Then, edit the `.env` file in order to configure your application.


### General settings

- `APP_ENV` should be `local` during development and `production` on you production server.

- `APP_KEY` should have been generated during the installation. If not, the `php artisan key:generate` command will generate a key for you. TRAX LRS will not run without this key.

- `APP_DEBUG` should be `true` during development and `false` on you production server.

- `APP_URL` should be the root URL of your application.


### Database

- `DB_CONNECTION` should be `mysql` with MySQL and MariaDB, `pgsql` with PostgreSQL or `mongodb` with a pure MongoDB scenario. For hybrid database scenarios, it should be `mysql` or `pgsql` depending of your relational database.


#### Relational database (when applicable)

- `DB_HOST` and `DB_PORT` should be used to locate your relational database.

- `DB_DATABASE` is the name of your relational database.

- `DB_USERNAME` and `DB_PASSWORD` are the credentials of your relational database.  

- `DB_MARIADB` should be `1` when using MariaDB, `0` otherwise.


#### MongoDB database (when applicable)

- `MONGO_DB_HOST` and `MONGO_DB_PORT` should be used to locate your MongoDB database.

- `MONGO_DB_DATABASE` is the name of your MongoDB database.

- `MONGO_DB_USERNAME` and `MONGO_DB_PASSWORD` are the credentials of your MongoDB database.  


#### Data store drivers

- `USER_STORE_DRIVER` should be added and set to `mongo` for pure MongoDB scenarios. Otherwise, this setting should be removed. 

- `CLIENT_STORE_DRIVER` should be added and set `mongo` for pure MongoDB and hybrid database scenario. Otherwise, this setting should be removed. 

- `XAPI_STORE_DRIVER` should be added and set `mongo` for pure MongoDB and hybrid database scenario. Otherwise, this setting should be removed.   


### Sessions

- `SESSION_DRIVER` should be `database` for relational and hybrid database scenarios, or `file` for pure MongoDB scenarios.

- `SESSION_CONNECTION` should be `mysql` with MySQL and MariaDB, or `pgsql` with PostgreSQL. It is not used with pure MongoDB scenarios.


## Installing the database

Your application must be well configured before trying to install the database. When you are ready, enter the following command from the root of your application:

    php artisan migrate


## Creating the admin user

After installing the database, you may want to create an admin user in order to log into the application. Enter the following command from the root of your application:

    php artisan user:create-admin

Copy the generated password and email. Then, open your browser and log into the application. Don't forget to change your password in *My Profile*. 


## Creating a client account

Once your database is installed, you may want to create some Basic HTTP client accounts in order to let your third party applications connect to the LRS. You can create client accounts directly from the LRS user interface (Basic HTTP Clients page), or with the `php artisan client:create` command (see details below).

Then, you can configure your client with its credentials and the following endpoint, considering that your LRS URL is `http://trax.test`:

    http://trax.test/trax/ws/xapi

If you want to check that the endpoint URL is correct that your LRS is running, just enter `http://trax.test/trax/ws/xapi/about` in your browser. You should see some JSON information.


## Console commands

TRAX LRS provides a few convenient commands to manage your application directly from your console:

- `php artisan user:create-admin <email>`: create a new admin user account given an email address. When the email is omitted, it creates the standard *admin* account or reset its password.

- `php artisan user:list`: display the list of user accounts.

- `php artisan user:delete <email>`: delete a user account.

- `php artisan client:create <username> <password>`: create a new API client, given a username and password. The username and password are optional and are automatically generated when they are omitted.

- `php artisan client:list`: display the list of API clients.

- `php artisan client:delete <username>`: delete an API client.


## Plugins

- [Trax Sync:](https://github.com/trax-project/trax-sync) a plugin to push your statements to external repositories (LRS or ElasticSearch) 


## Performance optimization

To optimize the performances of the application, you may want to activate some caching functions. From the root folder, enter the following commands:

    php artisan route:cache
    php artisan config:cache


## License and copyright

TRAX LRS is distributed under the [EUPL 1.2 license](https://eupl.eu/1.2/en/).

Copyright 2019 Sébastien Fraysse, http://fraysse.eu, <sebastien@fraysse.eu>.

