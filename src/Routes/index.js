import { Router } from 'express';
import acronymRouter from "./acronymRoute";

const router = Router();

router.use('/acronym', acronymRouter);

export default router;