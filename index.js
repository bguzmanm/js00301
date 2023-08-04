const express = require("express");
const app = express();

const userRouter = require("./routes/userRoute");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/", userRouter);

app.listen("3000", () => {
  console.log("estámos escuchando por el puerto 3000");
});
