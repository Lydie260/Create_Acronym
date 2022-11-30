import { Router } from "express";
import acronymController from "../controller/acronymController";


const route = Router();
route
   .route("/create")
   .post(acronymController.create)
route.   get(acronymController.getAllAcronyms);

route
   .route("/:id")
   .put(acronymController.updateAcronym)
   .get(acronymController.getOne)
   .delete(acronymController.deleteAcronym);

export default route;
