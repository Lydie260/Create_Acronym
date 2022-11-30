import acronomyModel from "../model/acronomy";

import {
    create,
    getAll,
    getOneById,
    updateOneById,
    deleteOneById
} from "./globalController";

export const createController = create(acronomyModel);
export const getAllController = getAll(acronomyModel);
export const getOneController = getOneById(acronomyModel);
export const updateOneController = updateOneById(acronomyModel);
export const deleteOneController = deleteOneById(acronomyModel);
