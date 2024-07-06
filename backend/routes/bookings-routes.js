import express from "express";
// import { getBookingById } from "../controllers/booking-controller";
import { newBooking } from "../controllers/bookings-controller";

const bookingsRouter = express.Router();

// bookingsRouter.get("/:id", getBookingById);
bookingsRouter.post("/", newBooking);
// bookingsRouter.delete("/:id", deleteBooking);
export default bookingsRouter;
