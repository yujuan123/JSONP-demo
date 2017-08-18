/**
 * Created by yujuan on 17-8-18.
 */
const express = require('express');
const app = express();

app.get('/json-data', function (req, res) {
  res.status(200).jsonp({name: 'Marry'});
});

app.listen(4001, function () {
  console.log("app listening on port 4001!");
});