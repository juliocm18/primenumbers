import { Router } from 'express';
import demo from './demo/controller/demo.route'
const router: Router = Router();
router.use(demo);
export default router;
