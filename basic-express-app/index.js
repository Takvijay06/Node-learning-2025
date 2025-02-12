const express = require("express");
const userRoutes = require("./routes/userRoute");

const app = express();
const port = 4000;

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
