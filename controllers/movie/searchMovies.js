const { movie, Sequelize } = require('../../models');
const { category } = require('../../models');
const Op = Sequelize.Op;

exports.search = async (req, res) => {
  try {
    const searched = await movie.findAll({
      include: {
        model: category,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
      where: {
        title: {
          [Op.like]: '%' + req.params.target + '%',
        },
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (Object.keys(searched).length === 0) {
      return res.send({ message: 'None of the movies match what you are looking for' });
    }
    return res.send({ data: searched });
  } catch (error) {
    return res.send(error);
  }
};
