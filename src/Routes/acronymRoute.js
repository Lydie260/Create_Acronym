import { Router } from "express";
import acronymController from "../controller/acronymController";
import DataChecker from "../middlewares/checkedApi";
import Validator from "../middlewares/validation";

const route = Router();
route.post(
  "/create",
  

  DataChecker.validateName,
  Validator.newAcronmyRules(),
  Validator.validateInput,
  Validator.validateInput,
  acronymController.create
);
route.get("/getAll", acronymController.getAllAcronyms);

route
  .route("/:id")
  .put(acronymController.updateAcronym)
  .get(acronymController.getOne)
  .delete(acronymController.deleteAcronym);

export default route;
