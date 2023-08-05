exports.new = (req, res) => {
  const { id, name, cant, category } = req.body;
  const prod = {
    id,
    name,
    cant,
    category,
  };

  res.status(201).send(prod);
};

exports.update = (req, res) => {
  const { id, name, cant, category } = req.body;
  const prod = {
    id,
    name,
    cant,
    category,
  };

  res.status(200).send(prod);
}

exports.findAll = (req, res) => {
  const listProduct = [{
    id: 1,
    name: 'Producto 1',
    cant: 10,
    category: 'C1',
  }, {
    id: 2,
    name: 'Producto 2',
    cant: 20,
    category: 'B3',
  }];

  res.status(200).send(listProduct);
};

exports.findOne = (req, res) => {

  const { id } = req.params;

  const product = {
    id,
    name: `Producto ${id}`,
    cant: 20,
    category: 'B3',
  }

  res.status(200).send(product);
}

exports.delete = (req, res) => {
  const { id } = req.params;
  res.status(200).send({ code: 200, message: `eliminado producto ${id}` });
}