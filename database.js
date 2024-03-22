const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://cs260:cs260password@cluster0.89fwerh.mongodb.net/startup`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const progressCollection = db.collection('storedProgress');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function updateProgress(storedProgress) {
  progressCollection.insertOne(storedProgress);
}


async function getUsersMastered() {
  const query = { storedProgress: 100 }; // Adjusted query to find users with progress equal to 100
  const count = await progressCollection.countDocuments(query);
  return count;
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  updateProgress,
  getUsersMastered,
};

