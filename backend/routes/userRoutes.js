const express = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../model/userModel");
const BlackList = require('../blacklist/blackList');
const userRouter = express.Router();

// register the user
userRouter.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newPassword = await bcrypt.hash(password, 10);
    console.log(newPassword);
    newUser = await userModel.create({
      username,
      email,
      password: newPassword,
    });
    res.send({ meassage: "You have registered successfully", data: newUser });
  } catch (error) {
    res.send().status(500);
  }
});
userRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username });
    if (!user) {
    res.send("Sign Up Frist");
    }
    const varify = await bcrypt.compare(password, user.password);
    if (!varify) {
    res.send("Wrong Password");
    }
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      "secret",
      { expiresIn: "1h" }
    );
    res.send({
      msg: "Successfully Login",
      token: token,
    });
  } catch (error) {
    res.send(error);
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
