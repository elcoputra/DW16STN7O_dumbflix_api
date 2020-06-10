
const todos = [
  {
    id: 1,
    title: 'Cuci tangan',
    isDone: false,
  },
  {
    id: 2,
    title: 'Jaga jarak',
    isDone: true,
  },
  {
    id: 3,
    title: 'Pakai masker',
    isDone: false,
  },
];
/* GET users listing. */
exports.reads = async (req, res) => {
  res.send({ data: todos });
};
