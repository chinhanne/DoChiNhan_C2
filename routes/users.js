var express = require('express');
var router = express.Router();
let userSchema = require('../models/user')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let users = await userSchema.find({});
  res.send(users);
});
router.get('/:id', async function(req, res, next) {
  try {
    let user = await userSchema.findById(req.params.id);
    res.status(200).send({
      success:true,
      data:user
    });
  } catch (error) {
    res.status(404).send({
      success:fail,
      message:error.message
    })
  }
});
router.post('/', async function(req, res, next) {
  let body = req.body;
  let newUser = new userSchema({
    userName: body.userName,
    email: body.email,
    password: body.password,
  })
  await newUser.save()
  res.send(newUser);
});
router.put('/:id', async function(req, res, next) {
  try {
    let body = req.body;
    let user = await userSchema.findByIdAndUpdate(req.params.id,
      body,{new:true});
    res.status(200).send({
      success:true,
      data:user
    });
  } catch (error) {
    res.status(404).send({
      success:fail,
      message:error.message
    })
  }
});
router.delete('/:id', async function(req, res, next) {
  try {
    let user = await userSchema.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    res.status(200).send({
      success:true,
      message: "User deleted successfully",
      data:user
    });
  } catch (error) {
    res.status(404).send({
      success:fail,
      message:error.message
    })
  }
});

module.exports = router;
