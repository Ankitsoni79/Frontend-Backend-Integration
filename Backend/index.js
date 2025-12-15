const express = require("express");
const app = express();

const PORT = 5000;

app.get("/api/users", (req, res) => {
  res.status(200).json({
    message: "Backend API working successfully",
    users: ["Ankit", "Rahul", "Aman"]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
