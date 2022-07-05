# EasyRecycling

Please firstly install Node.js, NVM, and MongoDB, and then run the following commands. If you don't want to open a lot of shell mentioned below, please install Screen and use it (The commands for using Screen are not shown).

1. pull the code from Github

   ```
   git clone https://github.com/LIN-Yixin-0613/EasyRecycling.git
   ```

2. run the mongodb

   ```shell
   mongod
   ```

3. open another shell, initialize the database, and run the backend code

   ```shell
   cd EasyRecycling/api
   mongo recycle scripts/init.mongo.js
   npm install
   npm start
   ```

4. open another shell and run the frontend code

   ```
   cd EasyRecycling/ui
   npm install
   npm start
   ```

