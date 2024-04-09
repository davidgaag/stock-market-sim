import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRoutes from './routes/api.js';
import authRoutes from './routes/auth.js';

const app = express();
const port = process.env.PORT || 80;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const invalidRequest = new AppResponse(false, 'Invalid request');
export const usernameExists = new AppResponse(false, 'Username already exists');
export const loginFailed = new AppResponse(false, 'Username or password is incorrect');
export const serverError = new AppResponse(false, 'Internal server error');

app.use(express.json());

app.use((req, res, next) => {
   console.log(`${req.method} request for ${req.url}: ${JSON.stringify(req.body)}`);
   next();
});

app.use('/auth', authRoutes);

app.use('/api', apiRoutes);

app.use((req, res, next) => {
   console.log('Made it past API routes');
   next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
