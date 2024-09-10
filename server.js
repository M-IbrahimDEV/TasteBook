// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Define your routes here
// app.use('/api/recipes', require('./routes/recipes'));

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
