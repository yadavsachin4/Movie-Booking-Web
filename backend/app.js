import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";
import movieRouter from "./routes/movie-routes";
import bookingsRouter from "./routes/bookings-routes";
dotenv.config();

const app = express();


// app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
// app.use("/login",adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);


mongoose
  .connect(
    `mongodb+srv://schinyadav:gOGZuakwyOqAFnvI@cluster0.hcihxkk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )

  .then(() =>
    app.listen(3000, () =>
      console.log("Connected To Database And Server is running ")
    )
  )
  .catch((e) => console.log(e));

//mongodb-password:-agqXBbQA29W1trNS

// new; gOGZuakwyOqAFnvI
