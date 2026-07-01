const users = [
  {
    id: 1,
    name: "Ritesh Sharma",
    email: "ritesh@gmail.com",
    age: 22,
  },
];

const getUsers = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  const { id,name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({
      message: "Name, email and age are required",
    });
  }

  const newUser = {
    id,
    name,
    email,
    age,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);

  const { name, email, age } = req.body;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  user.name = name;
  user.email = email;
  user.age = age;

  res.json({
    message: "User updated successfully",
    user,
  });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users.splice(index, 1);

  res.json({
    message: "User deleted successfully",
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};