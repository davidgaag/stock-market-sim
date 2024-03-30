import { Request, Response } from 'express';
import apiRoutes from './api';
import path from 'path';

const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.use('/', apiRoutes);

app.use(express.static(path.join(__dirname, '../../stock-market-sim-client/dist')));

app.get('*', (req: Request, res: Response) => {
   res.sendFile(path.join(__dirname, '../../stock-market-sim-client/dist/index.html'));
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});

