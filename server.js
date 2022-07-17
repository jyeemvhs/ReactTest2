const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();

//uncomment when deploying.
//app.use(express.static(path.join(__dirname,'client','build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//uncomment when deploying.
//app.get('/',(req,res) => {
//  res.sendFile(path.join(__dirname,'client','build','index.html'));
//});

app.get('/api/read', (req, res) => {
  console.log("read " + req.query.value);
  res.json({count:5});
});

app.post('/api/create', (req, res) => {
  console.log("create " + req.body.value);
  res.json({count:50});
});

app.delete('/api/deleteSimple', (req, res) => {
  console.log("delete " + req.body.value);
  res.json({count:500});
});

app.delete('/api/delete/:id', (req, res) => {
  console.log("id " + req.params.id);
  console.log("delete " + req.body.value);
  res.json({count:500});
});


app.put('/api/putSimple', (req, res) => {
  console.log("put " + req.body.value);
  res.json({count:5000});
});

app.put('/api/put/:id', (req, res) => {
  console.log("id " + req.params.id);
  console.log("put " + req.body.value);
  res.json({count:5000});
});

const PORT = process.env.PORT || 5000;   //change when deploying.

app.listen(PORT, () => `Server running on port ${PORT}`);