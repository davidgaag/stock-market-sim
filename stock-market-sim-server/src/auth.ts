import { Request, Response, Router } from 'express';

const router = Router();

router.get('/auth/login', (req: Request, res: Response) => {
   res.send('Login endpoint');
});

router.get('/auth/register', (req: Request, res: Response) => {
   res.send('Register endpoint');
});

router.get('/auth/logout', (req: Request, res: Response) => {
   res.send('Logout endpoint');
});

export default router;