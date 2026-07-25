import express from "express";
import mongoose from "mongoose";
import router from "./routers/userroutes.js";

const app = express();
app.use(express.json());

app.use(router);

mongoose
  .connect(
    "mongodb+srv://rajkumarmass475:sYHEAQKSPEjAPciK@cluster0.un0dz.mongodb.net/mongodb_collection=Cluster0",
  )
  .then(() => console.log("Database conected"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server is up and running at port 3000");
});