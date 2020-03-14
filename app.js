const express = require("express");

const routes1 = require("./routes/server");
// const routes2 = require("./routes/api/server");
// const routes3 = require("./routes/server");


const app = express();
const PORT = process.env.PORT || 3001;



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require('./database')();

// Add routes, both API and view
app.use(routes1);
// app.use(routes2);
// app.use(routes3);



// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}`);
});
