const express = require('express');
const https = require('https');
const app = express();

app.get('/', (req, res) => {
      res.send("Server running!")
});





app.listen(3000);