
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

exports.create = (req, res) => {
  todos.push(req.body);
  res.send({ data: todos });
};
