const { transaction } = require('../../models');
const { user } = require('../../models');

exports.update = async (req, res) => {
  try {
    
    const report = await transaction.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!report) return res.status(400).send({ message: 'The id you provided does not exist' });
  
    const data = await transaction.findOne({
      where: { id: req.params.id },
      include :[{
        model : user,
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'userId'],
        },
      }],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId'],
      },
    });
  
    res.send({
      message: 'Succsess patching data transaction',
      transaction: data
    });
  } catch (error) {
    return res.send({error});
  }

};
