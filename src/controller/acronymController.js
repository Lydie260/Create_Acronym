import acronomyModel from "../model/acronomy";
import handleCrud from "../Utilis/handleCrud";



export const create = handleCrud.createOne (acronomyModel);
export const getOne = handleCrud.getOneById (acronomyModel);
export const getAllAcronyms = handleCrud.getAll(acronomyModel);
export const updateAcronym = handleCrud.updateOneById(acronomyModel);
export const deleteAcronym  = handleCrud. deleteOneById(acronomyModel);

export default {create,getOne,getAllAcronyms,updateAcronym,deleteAcronym}