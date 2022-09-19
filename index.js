require("dotenv").config();
const express = require("express");
const activityRoutes = require("./routes/activities");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

//uses routes from activities
//app.use('/activities', activityRoutes) --grabs route with /activities along with req

app.use("/activities", activityRoutes);

//connects to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //only listen to req when connected
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening on PORT!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//process.env.PORT = tells app to take PORT by reading the env variable
