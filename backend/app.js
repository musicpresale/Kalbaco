require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Koneksi MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Route auth
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.send('Kalbaco API ready');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port', PORT));
