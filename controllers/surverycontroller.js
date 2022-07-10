// let Express = require("express");
// let router = Express.Router();
// const { surveyModel } = require("../models");

// router.post("/create", async (req, res) => {
//   const {
//     Q1A,
//     Q1B,
//     Q1C,
//     Q1D,
//     Q1E,
//     Q1F,
//     Q2A,
//     Q2B,
//     Q2C,
//     Q2D,
//     Q2E,
//     Q2F,
//     Q3A,
//     Q3B,
//     Q3C,
//     Q3D,
//     Q3E,
//     Q3F,
//     Q3G,
//     Q3H,
//     Q3I,
//     Q3J,
//     Q3K,
//     Q3L,
//     Q3M,
//     Q3N,
//     Q3O,
//     Q3P,
//     Q3Q,
//     Q3R,
//     Q3S,
//     Q3T,
//     Q3U,
//     Q3V,
//     Q3W,
//     Q3X,
//     Q3Y,
//     Q3Z,
//     Q3AA,
//     Q3AB,
//     Q4A,
//     Q4B,
//     Q4C,
//     Q4D,
//     Q5,
//     Q6,
//     Q7,
//     Q8,
//     Q9,
//     Q10,
//     Q11,
//     AGE,
//     GENDER,
//     EDUC,
//     EMP,
//     STATE,
//     ROLE,
//     CONF,
//     ASSIST,
//   } = req.body.survey;

//   const surveyEntry = {
//     Q1A: Q1A,
//     Q1B: Q1B,
//     Q1C: Q1C,
//     Q1D: Q1D,
//     Q1E: Q1E,
//     Q1F: Q1F,
//     Q2A: Q2A,
//     Q2B: Q2B,
//     Q2C: Q2C,
//     Q2D: Q2D,
//     Q2E: Q2E,
//     Q2F: Q2F,
//     Q3A: Q3A,
//     Q3B: Q3B,
//     Q3C: Q3C,
//     Q3D: Q3D,
//     Q3E: Q3E,
//     Q3F: Q3F,
//     Q3G: Q3G,
//     Q3H: Q3H,
//     Q3I: Q3I,
//     Q3J: Q3J,
//     Q3K: Q3K,
//     Q3L: Q3L,
//     Q3M: Q3M,
//     Q3N: Q3N,
//     Q3O: Q3O,
//     Q3P: Q3P,
//     Q3Q: Q3Q,
//     Q3R: Q3R,
//     Q3S: Q3S,
//     Q3T: Q3T,
//     Q3U: Q3U,
//     Q3V: Q3V,
//     Q3W: Q3W,
//     Q3X: Q3X,
//     Q3Y: Q3Y,
//     Q3Z: Q3Z,
//     Q3AA: Q3AA,
//     Q3AB: Q3AB,
//     Q4A: Q4A,
//     Q4B: Q4B,
//     Q4C: Q4C,
//     Q4D: Q4D,
//     Q5: Q5,
//     Q6: Q6,
//     Q7: Q7,
//     Q8: Q8,
//     Q9: Q9,
//     Q10: Q10,
//     Q11: Q11,
//     AGE: AGE,
//     GENDER: GENDER,
//     EDUC: EDUC,
//     EMP: EMP,
//     STATE: STATE,
//     ROLE: ROLE,
//     CONF: CONF,
//     ASSIST: ASSIST,
//   };
//   console.log(surveyEntry);
//   try {
//     const newSurvey = await surveyModel.create(surveyEntry);
//     res.status(200).json(newSurvey);
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// });

// module.exports = router;

let router = require("express").Router();
let sequelize = require("../db");
let Survey = sequelize.import("../models/surveyModel");

router.post("/create", function (request, response) {
  let Q1A = request.body.survey.Q1A;
  let Q1B = request.body.survey.Q1B;
  let Q1C = request.body.survey.Q1C;
  let Q1D = request.body.survey.Q1D;
  let Q1E = request.body.survey.Q1E;
  let Q1F = request.body.survey.Q1F;
  let Q2A = request.body.survey.Q2A;
  let Q2B = request.body.survey.Q2B;
  let Q2C = request.body.survey.Q2C;
  let Q2D = request.body.survey.Q2D;
  let Q2E = request.body.survey.Q2E;
  let Q2F = request.body.survey.Q2F;
  let Q3A = request.body.survey.Q3A;
  let Q3B = request.body.survey.Q3B;
  let Q3C = request.body.survey.Q3C;
  let Q3D = request.body.survey.Q3D;
  let Q3E = request.body.survey.Q3E;
  let Q3F = request.body.survey.Q3F;
  let Q3G = request.body.survey.Q3G;
  let Q3H = request.body.survey.Q3H;
  let Q3I = request.body.survey.Q3I;
  let Q3J = request.body.survey.Q3J;
  let Q3K = request.body.survey.Q3K;
  let Q3L = request.body.survey.Q3L;
  let Q3M = request.body.survey.Q3M;
  let Q3N = request.body.survey.Q3N;
  let Q3O = request.body.survey.Q3O;
  let Q3P = request.body.survey.Q3P;
  let Q3Q = request.body.survey.Q3Q;
  let Q3R = request.body.survey.Q3R;
  let Q3S = request.body.survey.Q3S;
  let Q3T = request.body.survey.Q3T;
  let Q3U = request.body.survey.Q3U;
  let Q3V = request.body.survey.Q3V;
  let Q3W = request.body.survey.Q3W;
  let Q3X = request.body.survey.Q3X;
  let Q3Y = request.body.survey.Q3Y;
  let Q3Z = request.body.survey.Q3Z;
  let Q3AA = request.body.survey.Q3AA;
  let Q3AB = request.body.survey.Q3AB;
  let Q4A = request.body.survey.Q4A;
  let Q4B = request.body.survey.Q4B;
  let Q4C = request.body.survey.Q4C;
  let Q4D = request.body.survey.Q4D;
  let Q5 = request.body.survey.Q5;
  let Q6 = request.body.survey.Q6;
  let Q7 = request.body.survey.Q7;
  let Q8 = request.body.survey.Q8;
  let Q9 = request.body.survey.Q9;
  let Q10 = request.body.survey.Q10;
  let Q11 = request.body.survey.Q11;
  let AGE = request.body.survey.AGE;
  let GENDER = request.body.survey.GENDER;
  let EDUC = request.body.survey.EDUC;
  let EMP = request.body.survey.EMP;
  let STATE = request.body.survey.STATE;
  let ROLE = request.body.survey.ROLE;
  let CONF = request.body.survey.CONF;
  let ASSIST = request.body.survey.ASSIST;

  Survey.create({
    Q1A,
    Q1B,
    Q1C,
    Q1D,
    Q1E,
    Q1F,
    Q2A,
    Q2B,
    Q2C,
    Q2D,
    Q2E,
    Q2F,
    Q3A,
    Q3B,
    Q3C,
    Q3D,
    Q3E,
    Q3F,
    Q3G,
    Q3H,
    Q3I,
    Q3J,
    Q3K,
    Q3L,
    Q3M,
    Q3N,
    Q3O,
    Q3P,
    Q3Q,
    Q3R,
    Q3S,
    Q3T,
    Q3U,
    Q3V,
    Q3W,
    Q3X,
    Q3Y,
    Q3Z,
    Q3AA,
    Q3AB,
    Q4A,
    Q4B,
    Q4C,
    Q4D,
    Q5,
    Q6,
    Q7,
    Q8,
    Q9,
    Q10,
    Q11,
    AGE,
    GENDER,
    EDUC,
    EMP,
    STATE,
    ROLE,
    CONF,
    ASSIST,
  }).then(
    function createSuccess(data) {
      response.json(data);
    },
    function createError(err) {
      response.send(500, err.message);
    }
  );
});

module.exports = router;
