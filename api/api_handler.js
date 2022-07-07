const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const GraphQLDate = require('./graphql_date.js');
// const about = require('./about.js');
const issue = require('./issue.js');

const resolvers = {
  //有一些是多余的 因为前端只会用五个函数
  Query: {
    // about: about.getMessage,
    // issueList: issue.list,
    recordList: issue.list,
    getName: issue.getName,
    getPackaging: issue.getPackaging,
    customerList: issue.customerList
  },

  Mutation: {
    createAccount: issue.createAccount,
    addRecord: issue.addRecord,  
    createPackaging: issue.createPackaging,
    addAmount: issue.addAmount
  },
  GraphQLDate,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

function installHandler(app) {
  //sample.env里面的ENABLE_CORS被注释掉了
  //这里可以直接写const enableCors = 'true' 
  const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
  console.log('CORS setting:', enableCors);
  //可以多了解一下cors这个参数是干什么的
  server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = { installHandler };
