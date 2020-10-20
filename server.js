const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Add the middleware code needed to accept incoming data and add it to req.body

const cookbookRouter = require('./controllers/cookbookRoutes');
app.use('/api/cookbooks/', cookbookRouter);

const authorRouter = require('./controllers/authorRoutes');
app.use('/api/authors/', authorRouter);

app.use('/api/cookbooks/', cookbookRouter);
app.use('/api/authors/', authorRouter);

app.listen(4000, () => console.log('Server running on port 4000!'));
