const { movie } = require('../../models');
const { category } = require('../../models');

/* GET users listing. */
exports.reads = async (req, res) => {
  try {
    // ini di bawah metode ngambil data buat yang sudah di assosiation
    const moviesDataByCategory = await movie.findAll({
      where: {
        categoryId: req.params.categoryId,
      },
      include: [
        {
          model: category,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'categoryId'],
      },
    });
    return res.send({ data: moviesDataByCategory });
  } catch (error) {
    return res.send({ error });
  }
};
