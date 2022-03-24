const express = require('express')
const db = require('./db')
const path = require('path');

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(express.json());
app.use(cors(corsOptions))

app.listen(PORT, () => {
  console.log('Server is started!');
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'../frontend/build/index.html'));
});

app.post('/api/post', (req, res) => {
  const cardData = req.body;

  db.connect()
    .then((connection) => connection.insertOne(cardData)
      .then(res.json({
        RequestId: cardData._id,
        Amount: cardData.Amount
      })
    ))
})