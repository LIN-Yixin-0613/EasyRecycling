const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

async function list(_, {customerTel}) {
  const db = getDb();
  const filter = {};
  filter.customerTel = customerTel;
  const records = await db.collection('records').find(filter).toArray();
  return records;
}

async function customerList(_, {amount}) {
  const db = getDb();
  const records = await db.collection('customers').find({amount: {$gte: amount}}).toArray();
  return records;
}

async function getName(_, {customerTel}) {
  const db = getDb();
  const filter = {};
  filter.customerTel = customerTel;
  const records = await db.collection('customers').find(filter).toArray();
  return records;
}

async function getPackaging(_, {packagingID}) {
  const db = getDb();
  const filter = {};
  filter.packagingID = packagingID;
  const records = await db.collection('packagings').find(filter).toArray();
  // console.log("get package points" + records[0].points);
  console.log("getpackaing: " + records[0].points);
  return records;
}
 
// function validate(issue) {
//   const errors = [];
//   if (issue.title.length < 3) {
//     errors.push('Field "title" must be at least 3 characters long.');
//   }
//   if (issue.status === 'Assigned' && !issue.owner) {
//     errors.push('Field "owner" is required when status is "Assigned"');
//   }
//   if (errors.length > 0) {
//     throw new UserInputError('Invalid input(s)', { errors });
//   }
// }

// async function add(_, { issue }) {
//   const db = getDb();
//   validate(issue);

//   const newIssue = Object.assign({}, issue);
//   newIssue.created = new Date();
//   newIssue.id = await getNextSequence('issues');

//   const result = await db.collection('issues').insertOne(newIssue);
//   const savedIssue = await db.collection('issues')
//     .findOne({ _id: result.insertedId });
//   return savedIssue;
// }

async function createPackaging(_, {newPackaging}) {
  const db = getDb();
  const newObject = Object.assign({}, newPackaging);
  newObject.packagingID = await getNextSequence('packagings');
  const result = await db.collection('packagings').insertOne(newObject);
  const savedIssue = await db.collection('packagings').findOne({_id: result.insertedId});
  return savedIssue;
}

async function createAccount(_, {newCustomer}) {
  const db = getDb();
  const newObject = Object.assign({}, newCustomer);
  newObject.amount = 0;
  const result = await db.collection('customers').insertOne(newObject);
  const savedIssue = await db.collection('customers').findOne({_id: result.insertedId});
  return savedIssue;
}

async function addRecord(_, {newRecord}) {
  const db = getDb();
  const result = await db.collection('records').insertOne(newRecord);
  const savedIssue = await db.collection('records').findOne({_id: result.insertedId});
  return savedIssue;
}

async function addAmount(_, {addAmountInfo}) {
  const db = getDb();
  const vars1 = {};
  vars1.customerTel = addAmountInfo.customerTel;
  const customer = await db.collection('customers').findOne(vars1);
  // const updateAmount = addAmountInfo.points + customer.amount;
  // console("customer" + customer.amount)
  const vars2 = {};
  vars2.amount = addAmountInfo.points + customer.amount;
  console.log(vars2.amount)
  const result = await db.collection('customers').updateOne(vars1, { $set:vars2});
  // const result = await db.collection('customers').insertOne(customer);
  // const savedIssue = await db.collection('customers').findOne({_id: result.insertedId});
  return customer;

}

module.exports = {  list,createAccount, addRecord, getName,createPackaging,getPackaging,addAmount, customerList };
