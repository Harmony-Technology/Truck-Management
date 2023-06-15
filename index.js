const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.json({
    healthCheck: 'system is ready',
  });
});

app.get('/api/data', (req, res) => {
  axios
    // .get('http://192.168.0.151:5001/get')
    .get('http://192.168.0.196:8000/api/json-file/')
    .then((response) => {
      const data = response.data;
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch data' });
    });
});

app.get('/api/', (req, res) => {
  const data = [
    {
      Date: '2023-06-15 15:58:21',
      id: 2,
      platenumber: '7414-08',
      Date: '2023-06-15 15:58:21',
      image: 'https://i.ibb.co/0jZ3qYH/IMG-20210615-155821.jpg',
    },
    {
      Date: '2023-06-15 15:58:21',
      id: 3,
      platenumber: '7414-08',
      Date: '2023-06-15 15:58:21',
    },
  ];

  res.json(data);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server ready at ${PORT} 🚀`);
});

module.exports = app;
