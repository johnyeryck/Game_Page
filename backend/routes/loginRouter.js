import Router from 'express';
import loginSys from '../controllers/loginControl.js';
const router = Router();
router.post("/" , loginSys)

export default router;