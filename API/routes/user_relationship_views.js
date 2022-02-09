const router = require("express").Router();
const UserRelationship = require("../models/users_relationships_views_model");

router.get("/specificUser", async (req, res) => {
  var user = UserRelationship.findOne({ username: req.query.username }).exec();
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(500).send("Unable to get user");
  }
});

router.get("/getContactsForSpecificUser", (req, res) => {
  UserRelationship.findOne({ username: req.query.username }, (err, result) => {
    if (err) {
      res.status(500).send("Cannot get contacts for given user");
    } else {
      res.status(200).send(result.listContacts);
    }
  });
});

// {username, profilePic}
router.post("/createNewUser", (req, res) => {
  UserRelationship.create(req.body, (err, result) => {
    if (err) {
      res.status(500).send("Unable to create user " + err);
    } else {
      res.status(200).send(result);
    }
  });
});

router.delete("/deleteUser", (req, res) => {
  UserRelationship.deleteOne(
    { username: req.query.username },
    (err, result) => {
      if (err) {
        res.status(500).send("Unable to delete user " + err);
      } else {
        res.status(200).send("Delete successful");
      }
    }
  );
});

module.exports = router;
