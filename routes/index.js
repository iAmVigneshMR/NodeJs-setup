
const express = require('express')
const router = express.Router();
const { getAllUsers, saveUsers, editUsers, deleteUsers } = require('../controllers/index');

router.route("/getAllUsers").get(getAllUsers);
router.route("/createUsers").post(saveUsers);
router.route("/editUsers").post(editUsers);
router.route("/deleteUsers").post(deleteUsers);

module.exports = router