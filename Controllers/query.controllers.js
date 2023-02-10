const Query = require("../Models/query.models");
// const User = require('../Models/user.models')

const postQuery = (req, res) => {
  try {
    const query = req.body;

    let newQuery = new Query(query);

    newQuery.save((err, data) => {
      if (err) {
        return res
          .status(400)
          .send({ message: "Error while create query", Error: err });
      }
      res.status(201).send({
        message: "query has been created succesfully",
      });
    });
  } catch (error) {
    res.status(500).send({ message: "internal server error", error: "error" });
  }
};

const getQuery = async (req, res) => {
  try {
    const id = req._id;
    // console.log(id);
    // console.log(req);
    console.log(id);
    let query = await Query.find({});
    if (query) {
      return res.status(200).send(query);
    }
    return res
      .status(400)
      .send({ success: false, message: "Query doesnt exist." });
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const getQueryById = async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);
    let queryById = await Query.findById(id);
    if (queryById) {
      return res.status(200).send(queryById);
    }
    return res
      .status(400)
      .send({ success: false, message: "Query id doesnt exist." });
  } catch (err) {
    console.log("Error", err);
  }
};

module.exports = { postQuery, getQuery, getQueryById };
