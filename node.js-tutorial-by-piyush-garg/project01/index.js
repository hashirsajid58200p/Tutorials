const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: false }));

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
  .get((req, res) => {
    console.log("Someone hit the user/:id");
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;

    // Find index of the user
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return res.status(404).json({ status: "User not found" });
    }

    // Update user fields (only those provided in the request)
    users[userIndex] = { ...users[userIndex], ...body };

    // Save to file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ status: "error", message: err.message });
      }
      return res.json({ status: "success", user: users[userIndex] });
    });
  })

  .delete((req, res) => {
    const id = Number(req.params.id);

    // Find user index
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return res.status(404).json({ status: "User not found" });
    }

    // Remove the user from array
    const deletedUser = users.splice(userIndex, 1)[0];

    // Save updated data to file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ status: "error", message: err.message });
      }
      return res.json({ status: "success", deletedUser });
    });
  });

app.post("/api/users", (req, res) => {
  // create new user with
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
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
