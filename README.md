# EasyRecycling

Please firstly install Node.js, NVM, and MongoDB, and then run the following commands (if you don't want to open a lot of shell mentioned below, please install Screen and use it)

1. pull the code from Github

   ```
   git clone https://github.com/LIN-Yixin-0613/EasyRecycling.git
   ```

2. run the mongodb

   ```shell
   mongod
   ```

3. open another shell and initialize the database

   ```shell
   cd EasyRecycling/api
   mongo recycle scripts/init.mongo.js
   ```

4. run the backend code (under the directory of ./EasyRecycling/api)

   ```
   npm install
   screen npm start
   ```

5. open another shell and compile and run the frontend code

   ```
   cd EasyRecycling/ui
   npm install
   npm run compile
   screen npm start
   ```

