const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const port = 8000;

app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

//REST API
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get("", (req, res) => {
    console.log("Someone hit the user/:id");
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // edit user with id
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // delete user with id
    return res.json({ status: "pending" });
  });

app.post("api/users", (req, res) => {
  // create new user with
  return res.json({ status: "pending" });
});

// app.patch("api/users/:id", (req, res) => {
//   // edit any user with id
//   return res.json({ status: "pending" });
// });

// app.delete("api/users/:id", (req, res) => {
//   // delete any user with id
//   return res.json({ status: "pending" });
// });

app.listen(port, () => {
  console.log("server is listening on port 8000");
});
