const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crudgame",
});

app.use(express.json());
app.use(cors());

app.post("/users", (req, res) => {
  const { user} = req.body;
  const { email } = req.body;
  const { category } = req.body;

  let mysql = "INSERT INTO games ( name, email, category) VALUES (?, ?, ?)";
  db.query(mysql, [ user, email, category], (err, result) => {
    res.send(result);
  });
});

app.post("/users", (req, res) => {
  const { user } = req.body;
  const { email } = req.body;
  const { category } = req.body;

  let mysql =
    "SELECT * from games WHERE  user = ? AND cost = ? AND category = ?";
  db.query(mysql, [ user, email, category], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getusers", (req, res) => {
  let mysql = "SELECT * FROM games";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { user} = req.body;
  const { email } = req.body;
  const { category } = req.body;
  let mysql = "UPDATE games SET name = ?, cost = ?, category = ? WHERE id = ?";
  db.query(mysql, [ user, email, category, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM games WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});