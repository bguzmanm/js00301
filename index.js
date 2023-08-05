const express = require("express");
const app = express();
const morgan = require("morgan");

const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");

app.use(morgan("dev"));
app.use(express.json());
/*app.use(express.urlencoded({ extended: true }));*/
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);

app.listen("3000", () => {
  console.log("estámos escuchando por el puerto 3000");
});
