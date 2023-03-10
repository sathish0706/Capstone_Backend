const registerUser = require("../Models/user.models");

exports.getUser = async (req, res) => {
  try {
    const id = req.id;
    let user = await registerUser.findById(id);

    if (user) {
      user = user.toObject();
      delete user.hashedPassword;

      return res.status(200).send({ success: true, user: user });
    }
    return res
      .status(400)
      .send({ success: false, message: "User doesnt exist." });
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
