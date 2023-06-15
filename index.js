const express = require('express');
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

app.get('/api', (req, res) => {
  const data = [
    {
      id: 2,
      platenumber: '7414-08',
      hour: '15:58:21',
      Date: '2023-06-15',
      image: 'https://dummyimage.com/300',
      plate_image: 'https://dummyimage.com/300',
    },
    {
      id: 3,
      platenumber: '7414-08',
      hour: '15:58:21',
      Date: '2023-06-15',
      image: 'https://dummyimage.com/300',
      plate_image: 'https://dummyimage.com/300',
    },
    {
      id: 4,
      platenumber: '7414-08',
      hour: '20:58:21',
      Date: '2023-06-15',
      image: 'https://dummyimage.com/300',
      plate_image: 'https://dummyimage.com/300',
    },

    {
      id: 5,
      platenumber: '7414-08',
      hour: '21:38:21',
      Date: '2023-03-15',
      image: 'https://dummyimage.com/300',
      plate_image: 'https://dummyimage.com/300',
    },
    {
      id: 6,
      platenumber: '7414-08',
      hour: '12:23:21',
      Date: '2023-06-11',
      image: 'https://dummyimage.com/300',
      plate_image: 'https://dummyimage.com/300',
    },
    {
      id: 7,
      platenumber: '7414-08',
      hour: '08:20:21',
      Date: '2023-05-05',
      plate_image: 'https://dummyimage.com/300',
      image: 'https://dummyimage.com/300',
    },
  ];

  res.json(data);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server ready at ${PORT} 🚀`);
});

module.exports = app;
