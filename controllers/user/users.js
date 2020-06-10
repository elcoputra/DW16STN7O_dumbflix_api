const { user } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    const userdata = await user.findAll();
    res.send({ data: userdata });
  } catch (error) {
    console.log(error);
  }
};
