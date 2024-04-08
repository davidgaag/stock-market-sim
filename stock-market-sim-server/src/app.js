const apiRoutes = require('./routes/api.js');
const express = require('express');
const authRoutes = require('./routes/auth.js');
const path = require('path');

const app = express();
const port = process.env.PORT || 80;

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

