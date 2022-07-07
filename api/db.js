require('dotenv').config();
const { MongoClient } = require('mongodb');

let db;

async function connectToDb() {
 //在sample.env中 DB_URL=mongodb://localhost/issuetracker 所以一定会读取到issuetracker 如果不存在sample.env才会读取到recycle
  const url = process.env.DB_URL || 'mongodb://localhost/recycle';
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log('Connected to MongoDB at', url);
  db = client.db();
}

async function getNextSequence(name) {
  const result = await db.collection('counters').findOneAndUpdate(
    { _id: name },
    { $inc: { current: 1 } },
    { returnOriginal: false },
  );
  return result.value.current;
}

function getDb() {
  return db;
}

module.exports = { connectToDb, getNextSequence, getDb };
