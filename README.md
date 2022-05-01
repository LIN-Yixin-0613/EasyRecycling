# Cosmetic_Packaging_Recycling_System

Please firstly install Node.js, NVM, and MongoDB, and then run the following commands (if you don't want to open a lot of shell mentioned below, please install Screen and use it)

1. pull the code from Github

   ```
   git clone https://github.com/LIN-Yixin-0613/Cosmetic_Packaging_Recycling_System.git
   ```

2. change to the master branch

   ```
   cd ./Cosmetic_Packaging_Recycling_System
   git checkout origin/master
   ```

3. run the mongodb

   ```shell
   mongod
   ```

4. open another shell and initialize the database

   ```shell
   cd ./Cosmetic_Packaging_Recycling_System/api
   mongo recycle scripts/init.mongo.js
   ```

5. open another shell and run the backend code

   ```
   cd ./Cosmetic_Packaging_Recycling_System/api
   npm install
   screen npm start
   ```

6. open another shell and compile and run the frontend code

   ```
   cd ./Cosmetic_Packaging_Recycling_System/ui
   npm install
   npm run compile
   screen npm start
   ```

