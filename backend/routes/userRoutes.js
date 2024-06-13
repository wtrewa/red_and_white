const express = require("express");
const auth = require('../middleware/auth')
const bcrypt = require("bcrypt");
const userModel = require("../model/userModel");
const BlackList = require('../blacklist/blackList');
const jwt = require('jsonwebtoken')
const userRouter = express.Router();

// register the user
userRouter.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newPassword = await bcrypt.hash(password, 10);
    console.log(newPassword);
    newUser = await userModel.create({
      ...req.body,
      password: newPassword,
      
    });
    res.send({ meassage: "You have registered successfully", data: newUser });
  } catch (error) {
    res.send().status(500);
  }
});
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const user = await userModel.findOne({ email });
    console.log(user);

    if (!user) {
      return res.status(404).send("User not found. Please sign up first.");
    }

    const verify = await bcrypt.compare(password, user.password);
    if (!verify) {
      return res.status(401).send("Wrong Password.");
    }

    const token = jwt.sign(
      { userId: user._id, username: user.email },
      "secret",
      { expiresIn: "1h" }
    );
    console.log(token);

    return res.status(200).json({
      msg: "Successfully logged in",
      token: token,
      data: user
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error", error: error.message });
  }
});

userRouter.get('/logout',async(req,res)=>{
    try {
        token = req.headers.authorization?.split(' ')[1]
        if(!token)
        {
            res.send("login first")
        }
        BlackList.push(token)
        res.send('You have logged out')
    } catch (error) {
        res.send(error)
    }
})


//update user for cartPage
userRouter.patch('/user/:id',auth,async(req,res)=>{
    try {
      const {id} = req.params;
      const obj = req.body;
      const users = await userModel.findById(id)
      let {cartProducts} = users;
      cartProducts.push(obj)
      console.log(cartProducts)
      const updatedcart = await userModel.findByIdAndUpdate(id,{cartProducts},{new:true})
      console.log(updatedcart)
      res.send({msg:"product added to the cart",user:updatedcart})
    } catch (error) {
      res.send(error.message).status(500)
    }
})

module.exports = userRouter;
