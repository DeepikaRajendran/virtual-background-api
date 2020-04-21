const express = require('express');
const router = express.Router();
const models  = require('./../models/index');
const Submission = require('./../models/submission.model');

router.get('/', function (req, res, next) {
  models.Submission.findAll()
    .then(submissions => {
      res.json(submissions);
    })
    .catch(err => res.json(err));
});

router.post('/', function (req, res, next) {
  
  // const submission = new Submission({
  //   name:req.body.name,
  //   url:req.body.url,
  //   source_url:req.body.source_url,
  //   approved:req.body.approved
  // });
  // console.log(submission);
  models.Submission.create({
    name:req.body.name,
    url:req.body.url,
    source_url:req.body.source_url,
    approved:req.body.approved
  })
    .then(submissions => {
      console.log(submissions);
      res.status(200).json(submissions);
    })
    .catch(err => res.status(400).json({ error: err }));
});


module.exports = router;