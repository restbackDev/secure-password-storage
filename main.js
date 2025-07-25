import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.json({message: "Hello, World!"});
});

app.listen(port, () => {
    // console.log(`Server listening on port ${port}`);
    console.log(`Server listening on http://127.0.0.1:${port}`);
});