const connection = require('../config/connection');

const getUsers = async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM `user`;');
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { getUsers };
