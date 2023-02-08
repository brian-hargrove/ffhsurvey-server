let router = require("express").Router();
let sequelize = require("../db");
let Survey = sequelize.import("../models/survey23Model");

router.post("/create", function (request, response) {
  let Q1A = request.body.survey23.Q1A;
  let Q1B = request.body.survey23.Q1B;
  let Q1C = request.body.survey23.Q1C;
  let Q1D = request.body.survey23.Q1D;
  let Q1E = request.body.survey23.Q1E;
  let Q1F = request.body.survey23.Q1F;
  let Q1G = request.body.survey23.Q1G;
  let Q1H = request.body.survey23.Q1H;
  let Q1I = request.body.survey23.Q1I;
  let Q1J = request.body.survey23.Q1J;
  let Q1K = request.body.survery23.Q1K;
  let Q2 = request.body.survey23.Q2;
  let Q3A = request.body.survey23.Q3A;
  let Q3B = request.body.survey23.Q3B;
  let Q3C = request.body.survey23.Q3C;
  let Q3D = request.body.survey23.Q3D;
  let Q3E = request.body.survey23.Q3E;
  let Q4 = request.body.survey23.Q4;
  let Q5 = request.body.survey23.Q5;
  let Q5A = request.body.survey23.Q5A;
  let Q6A = request.body.survey23.Q6A;
  let Q6B = request.body.survey23.Q6B;
  let Q6C = request.body.survey23.Q6C;
  let Q6D = request.body.survey23.Q6D;
  let Q7 = request.body.survey23.Q7;
  let Q8 = request.body.survey23.Q8;
  let Q9A = request.body.survey23.Q9A;
  let Q9B = request.body.survey23.Q9B;
  let Q9C = request.body.survey23.Q9C;
  let Q9D = request.body.survey23.Q9D;
  let Q10A = request.body.survey23.Q10A;
  let Q10B = request.body.survey23.Q10B;
  let Q10C = request.body.survey23.Q10C;
  let Q10D = request.body.survey23.Q10D;
  let Q10E = request.body.survey23.Q10E;
  let Q10F = request.body.survey23.Q10F;
  let Q10G = request.body.survey23.Q10G;
  let Q10H = request.body.survey23.Q10H;
  let Q11 = request.body.survey23.Q11;
  let Q12 = request.body.survey23.Q12;

  survey23
    .create({
      Q1A,
      Q1B,
      Q1C,
      Q1D,
      Q1E,
      Q1F,
      Q1G,
      Q1H,
      Q1I,
      Q1J,
      Q1K,
      Q2,
      Q3A,
      Q3B,
      Q3C,
      Q3D,
      Q3E,
      Q4,
      Q5,
      Q5A,
      Q6A,
      Q6B,
      Q6C,
      Q6D,
      Q7,
      Q8,
      Q9A,
      Q9B,
      Q9C,
      Q9D,
      Q10A,
      Q10B,
      Q10C,
      Q10D,
      Q10E,
      Q10F,
      Q10G,
      Q10H,
      Q11,
      Q12,
    })
    .then(
      function createSuccess(data) {
        response.json(data);
      },
      function createError(err) {
        response.send(500, err.message);
      }
    );
});

module.exports = router;
