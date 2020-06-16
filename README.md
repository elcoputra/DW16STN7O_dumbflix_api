# Welcome to Dumbflix Api!

Ini adalah task dari dumbways untuk membuat full stack web dengan javascript .


# First

Buatlah file .env
lalu masukan 

    TOKEN_KEY=yourpassword
    TOKEN_KEY_ADMIN=yourpassword

**yourpassword = password kamu sendiri, berguna untuk generate token*

## Install dependency yang di butuhkan project

jalankan di konsole di dalam project

    $ npm install
*npm akan menginstall otomatis plugin yang di butuhkan*

## Database

Buatlah database dengan nama dumbflix_dev
lalu generate di konsole di dalam project.

    $ npx sequelize-cli db:migrate

## Menjalankan project

mode debug, jalankan di konsol di dalam project folder

    $ npm test
   atau
   

    $ npm start
  atau
  

    $ nodemon app.js



## Whats is done

|Features| Status|
|--|--|
| login | done |
| Register |done  |
| user | done |
| film / movie | done |
| category |done  |
| transaction | done |
| episode | done |
| search episode | done |
