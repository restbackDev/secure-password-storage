import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.json({message: "Hello, Worl!"});
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});