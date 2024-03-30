import { Router, Request, Response } from 'express';
const router = Router();

router.get('/service/login', (req: Request, res: Response) => {
   res.send('Login endpoint');
});

router.get('/service/register', (req: Request, res: Response) => {
   res.send('Register endpoint');
});

router.get('/service/logout', (req: Request, res: Response) => {
   res.send('Logout endpoint');
});

export default router;