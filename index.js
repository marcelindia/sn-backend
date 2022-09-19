require("dotenv").config();
const express = require("express");
const activityRoutes = require("./routes/activities");

const app = express();

app.use(express.json());

//uses routes from activities
//app.use('/activities', activityRoutes) --grabs route with /activities along with req

app.use("/activities", activityRoutes);

//process.env.PORT = tells app to take PORT by reading the env variable
app.listen(process.env.PORT, () => {
  console.log(`Listening!`);
});
