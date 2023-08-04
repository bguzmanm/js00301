exports.createUser = (req, res) => {
  const User = {
    username: 'rodolfo',
    name: 'Rodolfo',
    lastName: 'Rojas',
    password: '1234'
  };
  console.log("Se ha creado el usuario", User);
  res.send("Usuario creado correctamente");
}

exports.showUser = (req, res) => {
  const User = {
    username: 'rodolfo',
    name: 'Rodolfo',
    lastName: 'Rojas',
    password: '1234'
  };
  res.send(User);
}

exports.updateUser = (req, res) => {
  console.log("actualizado el usuario");
  res.send("ok!");
}