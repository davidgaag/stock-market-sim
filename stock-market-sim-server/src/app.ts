import { Request, Response } from 'express';
import apiRoutes from './routes/api';
import authRoutes from './routes/auth';
import path from 'path';

const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.use('/auth', authRoutes);

app.use('/', apiRoutes);

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req: Request, res: Response) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});

