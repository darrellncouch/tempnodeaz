const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => res.send('Hello World!'));

app.listen(port, () => `Listening on port : ${port}`);