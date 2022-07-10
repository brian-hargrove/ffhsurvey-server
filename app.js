require("dotenv").config();
const Express = require("express");
// const sequelize = require("sequelize");
const app = Express();
// const dbConnection = require("./db");
// const controllers = require("./controllers/index");

let sequelize = require("./db");
let survey = require("./controllers/surverycontroller");

sequelize.sync(); //{force: true} - will clear databases

app.use(Express.json());
app.use(require("./middleware/headers"));

app.use("/survey", survey);

app.listen(process.env.PORT, function () {
  console.log(`App is listening on ${process.env.PORT}`);
});

// app.use("/survey", controllers.surveyController);
// app.use("/user", controllers.userController);

// dbConnection
//   .authenticate()
//   .then(() => dbConnection.sync())
//   .then(() => {
//     app.listen(3000, () => {
//       console.log(`[server]: App is listening on 3000.`);
//     });
//   })
//   .catch((err) => {
//     console.log(`[Server]: Server Crashed. Error = ${err}`);
//   });
