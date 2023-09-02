const express = require('express');
const db = require("./config/index");
const bodyParser = require('body-parser');
const app = express();
// body-Parser
app.use(bodyParser.json()); // Parse JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Routes 
const studentRoutes = require('./routes/student.routes');
const deanRoutes = require('./routes/dean.routes');
const SlotRoutes = require('./routes/slots.routes');
// App Using Routes
app.use('/student',studentRoutes);
app.use('/dean',deanRoutes);
app.use('/slot',SlotRoutes);

db.sequelize
  .sync()
  .then(() => {
    console.log("db sync to university");
  })
  .catch((err) => {
    console.log("Failed to sync: " + err.message);
  });

const PORT = process.env.PORT || 3360;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});