import Response from "../utils/Response";
import status from "http-status";

export const create = (Model) => async (req, res, next) => {
    try {
      const data = await Model.create(req.body);
      if (!data) {
        return Response.errorMessage(
          res,
          "failed to add Acronym",
          status.BAD_REQUEST
        );
      }
      return Response.succesMessage(res, "Success", data, status.CREATED);
    } catch (error) {
      console.log(error);
    }
  };

  export const getAll = (Model) => async (req, res, next) => {
    try {
      const data = await Model.find();
      if (!data) {
        return Response.errorMessage(res, "failed!", status.BAD_REQUEST);
      }
      return Response.succesMessage(res, "Success", data, status.OK);
    } catch (error) {
      console.log(error);
    }
  };

  export const getOneById = (Model) => async (req, res, next) => {
    try {
      const data = await Model.findById(req.params.id);
      if (!data) {
        return Response.errorMessage(res, "failed!", status.BAD_REQUEST);
      }
      return Response.succesMessage(res, "Success", data, status.OK);
    } catch (error) {
      console.log(error);
    }
  };

  export const updateOneById = (Model) => async (req, res, next) => {
    try {
      const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!data) {
        return Response.errorMessage(res, "failed!", status.BAD_REQUEST);
      }
      return Response.succesMessage(res, "Success", data, status.OK);
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteOneById = (Model) => async (req, res, next) => {
    try {
      const data = await Model.findByIdAndDelete(req.params.id);
      if (!data) {
        return Response.errorMessage(res, "failed!", status.BAD_REQUEST);
      }
      return Response.succesMessage(res, "Success", data, status.OK);
    } catch (error) {
      console.log(error);
    }
  };