// const { DataTypes } = require("sequelize");
// const db = require("../db");

// const Survey = db.define("survey", {
//   Q1A: {
//     type: DataTypes.INTEGER,
//   },
//   Q1B: {
//     type: DataTypes.INTEGER,
//   },
//   Q1C: {
//     type: DataTypes.INTEGER,
//   },
//   Q1D: {
//     type: DataTypes.INTEGER,
//   },
//   Q1E: {
//     type: DataTypes.INTEGER,
//   },
//   Q1F: {
//     type: DataTypes.INTEGER,
//   },
//   Q2A: {
//     type: DataTypes.INTEGER,
//   },
//   Q2B: {
//     type: DataTypes.INTEGER,
//   },
//   Q2C: {
//     type: DataTypes.INTEGER,
//   },
//   Q2D: {
//     type: DataTypes.INTEGER,
//   },
//   Q2E: {
//     type: DataTypes.INTEGER,
//   },
//   Q2F: {
//     type: DataTypes.INTEGER,
//   },
//   Q3A: {
//     type: DataTypes.INTEGER,
//   },
//   Q3B: {
//     type: DataTypes.INTEGER,
//   },
//   Q3C: {
//     type: DataTypes.INTEGER,
//   },
//   Q3D: {
//     type: DataTypes.INTEGER,
//   },
//   Q3E: {
//     type: DataTypes.INTEGER,
//   },
//   Q3F: {
//     type: DataTypes.INTEGER,
//   },
//   Q3G: {
//     type: DataTypes.INTEGER,
//   },
//   Q3H: {
//     type: DataTypes.INTEGER,
//   },
//   Q3I: {
//     type: DataTypes.INTEGER,
//   },
//   Q3J: {
//     type: DataTypes.INTEGER,
//   },
//   Q3K: {
//     type: DataTypes.INTEGER,
//   },
//   Q3L: {
//     type: DataTypes.INTEGER,
//   },
//   Q3M: {
//     type: DataTypes.INTEGER,
//   },
//   Q3N: {
//     type: DataTypes.INTEGER,
//   },
//   Q3O: {
//     type: DataTypes.INTEGER,
//   },
//   Q3P: {
//     type: DataTypes.INTEGER,
//   },
//   Q3Q: {
//     type: DataTypes.INTEGER,
//   },
//   Q3R: {
//     type: DataTypes.INTEGER,
//   },
//   Q3S: {
//     type: DataTypes.INTEGER,
//   },
//   Q3T: {
//     type: DataTypes.INTEGER,
//   },
//   Q3U: {
//     type: DataTypes.INTEGER,
//   },
//   Q3V: {
//     type: DataTypes.INTEGER,
//   },
//   Q3W: {
//     type: DataTypes.INTEGER,
//   },
//   Q3X: {
//     type: DataTypes.INTEGER,
//   },
//   Q3Y: {
//     type: DataTypes.INTEGER,
//   },
//   Q3Z: {
//     type: DataTypes.INTEGER,
//   },
//   Q3AA: {
//     type: DataTypes.INTEGER,
//   },
//   Q3AB: {
//     type: DataTypes.INTEGER,
//   },
//   Q4A: {
//     type: DataTypes.INTEGER,
//   },
//   Q4B: {
//     type: DataTypes.INTEGER,
//   },
//   Q4C: {
//     type: DataTypes.INTEGER,
//   },
//   Q4D: {
//     type: DataTypes.INTEGER,
//   },
//   Q5: {
//     type: DataTypes.STRING,
//   },
//   Q6: {
//     type: DataTypes.STRING,
//   },
//   Q7: {
//     type: DataTypes.STRING,
//   },
//   Q8: {
//     type: DataTypes.STRING,
//   },
//   Q9: {
//     type: DataTypes.STRING,
//   },
//   Q10: {
//     type: DataTypes.STRING,
//   },
//   Q11: {
//     type: DataTypes.STRING,
//   },
//   AGE: {
//     type: DataTypes.INTEGER,
//   },
//   GENDER: {
//     type: DataTypes.INTEGER,
//   },
//   EDUC: {
//     type: DataTypes.INTEGER,
//   },
//   EMP: {
//     type: DataTypes.INTEGER,
//   },
//   STATE: {
//     type: DataTypes.STRING,
//   },
//   ROLE: {
//     type: DataTypes.INTEGER,
//   },
//   CONF: {
//     type: DataTypes.INTEGER,
//   },
//   ASSIST: {
//     type: DataTypes.INTEGER,
//   },
// });

// module.exports = Survey;

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("survey", {
    Q1A: DataTypes.INTEGER,
    Q1B: DataTypes.INTEGER,
    Q1C: DataTypes.INTEGER,
    Q1D: DataTypes.INTEGER,
    Q1E: DataTypes.INTEGER,
    Q1F: DataTypes.INTEGER,
    Q2A: DataTypes.INTEGER,
    Q2B: DataTypes.INTEGER,
    Q2C: DataTypes.INTEGER,
    Q2D: DataTypes.INTEGER,
    Q2E: DataTypes.INTEGER,
    Q2F: DataTypes.INTEGER,
    Q3A: DataTypes.INTEGER,
    Q3B: DataTypes.INTEGER,
    Q3C: DataTypes.INTEGER,
    Q3D: DataTypes.INTEGER,
    Q3E: DataTypes.INTEGER,
    Q3F: DataTypes.INTEGER,
    Q3G: DataTypes.INTEGER,
    Q3H: DataTypes.INTEGER,
    Q3I: DataTypes.INTEGER,
    Q3J: DataTypes.INTEGER,
    Q3K: DataTypes.INTEGER,
    Q3L: DataTypes.INTEGER,
    Q3M: DataTypes.INTEGER,
    Q3N: DataTypes.INTEGER,
    Q3O: DataTypes.INTEGER,
    Q3P: DataTypes.INTEGER,
    Q3Q: DataTypes.INTEGER,
    Q3R: DataTypes.INTEGER,
    Q3S: DataTypes.INTEGER,
    Q3T: DataTypes.INTEGER,
    Q3U: DataTypes.INTEGER,
    Q3V: DataTypes.INTEGER,
    Q3W: DataTypes.INTEGER,
    Q3X: DataTypes.INTEGER,
    Q3Y: DataTypes.INTEGER,
    Q3Z: DataTypes.INTEGER,
    Q3AA: DataTypes.INTEGER,
    Q3AB: DataTypes.INTEGER,
    Q4A: DataTypes.INTEGER,
    Q4B: DataTypes.INTEGER,
    Q4C: DataTypes.INTEGER,
    Q4D: DataTypes.INTEGER,
    Q5: DataTypes.STRING,
    Q6: DataTypes.STRING,
    Q7: DataTypes.STRING,
    Q8: DataTypes.STRING,
    Q9: DataTypes.STRING,
    Q10: DataTypes.STRING,
    Q11: DataTypes.STRING,
    AGE: DataTypes.INTEGER,
    GENDER: DataTypes.INTEGER,
    EDUC: DataTypes.INTEGER,
    EMP: DataTypes.INTEGER,
    STATE: DataTypes.STRING,
    ROLE: DataTypes.INTEGER,
    CONF: DataTypes.INTEGER,
    ASSIST: DataTypes.INTEGER,
  });
};
