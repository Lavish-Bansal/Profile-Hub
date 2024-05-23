const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const dotenv = require("dotenv");
const cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

const middleware = require("./utils/middleware");
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");

app.use("/api", authRoutes);
app.use("/api/contacts", contactRoutes);

app.use(middleware.unknownEndpointHandler);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
