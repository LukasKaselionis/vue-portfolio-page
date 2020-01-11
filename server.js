const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || 8080;
app.listen(port, (req, res) => {
    console.log(`server listening on port: ${port}`);
});