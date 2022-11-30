import { Router } from "express";


const route = Router();
route
   .route("/")
   .post()
   .get();

route
   .route("/:id")
   .put()
   .get()
   .delete();

export default route;
