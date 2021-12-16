require("dotenv").config();
import express from "express";

const app = express();
const cors = require("cors");
const binsRouter = require("./routes/bins/index");
const organizationsRouter = require("./routes/organizations/index");
app.use(express.json());
app.use(cors());

app.use("/api/bins", binsRouter);
app.use("/api/organizations", organizationsRouter);

app.listen(process.env.PORT, () => {
  console.log("port", process.env.PORT);
  console.log("App Started Successfully");
});
