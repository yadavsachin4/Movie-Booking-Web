import express from "express";
import { addMovie } from "../controllers/movie-controller";
const movieRouter = express.Router();
// movieRouter.get("/", getAllMovies);
// movieRouter.get("/:id", getMovieById);
movieRouter.post("/", addMovie);

export default movieRouter;
