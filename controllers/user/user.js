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

// exports.user = async (req, res) => {
//   const { id } = req.params;
//   const index = id - 1;
//   res.send(todos[index]);
// };
exports.read = (req, res) => {
  const { id } = req.params;
  const index = id;
  res.send(todos[index]);
};
