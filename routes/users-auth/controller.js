const { User } = require("../../models");
const { JWT_SECRET_KEY } = require("../../config");
const {
  hashPassword,
  comparedPassword,
  generateToken,
} = require("../../helpers");

const jwt = require("jsonwebtoken");
const objectId = require("mongodb").ObjectID;

module.exports = {
  registerUser: async (req, res) => {
    const hashPass = await hashPassword(req.body.password);

    try {
      //Registrasi user
      const resRegister = await User.create({
        ...req.body,
        password: hashPass,
      });

      const { _id, name, email } = resRegister;

      //Jika berhasil, outputkan user dengan id, name dan email
      res.status(201).json({
        status: 201,
        message: `User succesfully created with id ${resRegister._id}`,
        data: { _id, name, email },
      });
    } catch (error) {
      console.error("Error occured with message :", error);
      res.status(500).json({ status: 500, message: error.message });
    }
  },
  loginUser: async (req, res) => {
    try {
      await User.findOne({ email: req.body.email }).then(async (userData) => {
        
        //Check user dengan parameter email tersebut apakah ada
        if (!userData)
          return res.status(404).json({
            status: 404,
            message: `User with email ${req.body.email} not found`,
          });

        //Check enkripsi password dengan parameter password
        const compared = await comparedPassword(
          req.body.password,
          userData.password
        );

        if (!compared)
          return res.status(401).json({
            status: 401,
            message: "The password that entered was incorrect",
          });

        //Jika berhasil, return token JWT
        const tokenLogin = await generateToken(userData);

        return res.status(200).json({
          status: 200,
          message: "Login succesfully",
          data: { token: tokenLogin },
        });
      });
    } catch (error) {
      console.error("Error occured with message :", error);
      res.status(500).json({ status: 500, message: error.message });
    }
  },
};
