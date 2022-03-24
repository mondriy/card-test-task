const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')

const connect = async() => {
  try {
    await client.connect();
    const db = client.db('test-task');
    try {
      db.createCollection('cards')
    } catch(e) {
      console.log(e);
    }
    return await client.db().collection('cards');
  } catch(e) {
    console.log(e);
  }
}

module.exports = {
  connect: connect
}