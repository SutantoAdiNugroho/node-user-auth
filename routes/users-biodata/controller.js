const { User } = require("../../models");
const objectId = require("mongodb").ObjectId;

module.exports = {
  getAllUser: async (req, res) => {
    try {
      //Mencari semua user tanpa menampilakan password dari setiap user, dengan sort tanggal pembuatan terbaru
      const result = await User.find({})
        .select("-password")
        .sort({ created_at: -1 });

      res.status(200).json({
        status: 200,
        message: "Show all registrant data",
        data: result,
      });
    } catch (error) {
      console.error("Error occured with message :", error);
      res.status(500).json({ status: 500, message: error.message });
    }
  },
  getOneUser: async (req, res) => {
    try {
      //Menampilkan spesifik user dengan parameter _id tanpa menampilkan password user
      const result = await User.find({
        _id: objectId(req.params.id),
      }).select("-password");

      res.status(200).json({
        status: 200,
        message: `Show specific user by id ${req.params.id}`,
        data: result,
      });
    } catch (error) {
      console.error("Error occured with message :", error);
      res.status(500).json({ status: 500, message: error.message });
    }
  },
  updateOneUser: async (req, res) => {
    const { id } = req.params;

    try {
      //Mengupdate user dengan dengan mencari user by _id dahulu
      const result = await User.updateOne(
        { _id: objectId(id) },
        { $set: req.body }
      );

      res.status(200).json({
        status: 200,
        message: `User succesfully update with id ${id}`,
        data: result,
      });
    } catch (error) {
      console.error("Error occured with message :", error);
      res.status(500).json({ status: 500, message: error.message });
    }
  },
};
