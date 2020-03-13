const mongoose = require('mongoose');

const db_url = process.env.MONGODB_URI || "mongodb://localhost/google-books";

const databaseConnection = () => {
  try {
    mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    mongoose.connection.once('open', () => {
      console.log('[database]: Connected to MongoDB Atlas Cluster');
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = databaseConnection;