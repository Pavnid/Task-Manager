const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const taskRoutes = require('./routes/task');
app.use('/api/tasks', taskRoutes);


// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error(err));

// Test route
app.get('/', (req, res) => {
  res.send('Task Manager API Running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
