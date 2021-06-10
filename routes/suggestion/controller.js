const { Suggestions } = require("../../models");

module.exports = {
  postSuggestion: async (req, res) => {
    try {
      const resRegister = await Suggestions.create({
        ...req.body,
      });

      res.status(201).json({
        status: 201,
        message: `Suggestion succesfully created with id ${resRegister._id}`,
      });
    } catch (error) {
      console.error("Error occured with message :", error);
      res.status(500).json({ status: 500, message: error.message });
    }
  },
};
