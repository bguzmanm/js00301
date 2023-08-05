const { User } = require("../models/User");

exports.createUser = (req, res) => {

  const { username, name, lastName, password } = req.body;

  const user = {
    username,
    name,
    lastName,
    password
  };

  res.status(201).send(user);
  // res.status(400).send({ code: 400, message: "bad request" });
  // res.status(403).send({ code: 403, message: "Forbidden" });
}

exports.showUser = (req, res) => {
  const listUser = [{
    username: 'rodolfo',
    name: 'Rodolfo',
    lastName: 'Rojas',
    password: '1234'
  }, {
    username: 'catalina',
    name: 'Catalina',
    lastName: 'Clarines',
    password: 'abcd'
  }
  ];

  res.status(200).send(listUser);
}

exports.updateUser = (req, res) => {
  const { username, name, lastName, password } = req.body;

  const user = {
    username,
    name,
    lastName,
    password
  }
  res.status(200).send(user);
}

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  res.status(200).send({ code: 200, message: `borrado ${id}` });
}
