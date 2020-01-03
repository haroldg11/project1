const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");
const cors = require('cors');
const api = require('./server/routes/api');

const port = 3000;

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.static(__dirname + '/dist/jusswebsite'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/jusswebsite/index.html'));
});

app.post('/sendFormData', (req, res) => {
  console.log(req.body, 'data of form');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '465',
    auth: {
      user: 'jussimpletrading@gmail.com', // must be Gmail
      pass: 'italian$123'
    }
  });

  var mailOptions = {
    from: 'jussimpletrading@gmail.com',
    to: 'jussimpletrading@gmail.com', // must be Gmail
    cc:`${req.body.name} <${req.body.email}>`,
    subject: 'Sending Email using Node.js',
    html: `
            <table style="width: 100%; border: none">
              <thead>
                <tr style="background-color: #000; color: #fff;">
                  <th style="padding: 10px 0">Name</th>
                  <th style="padding: 10px 0">E-mail</th>
                  <th style="padding: 10px 0">Message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style="text-align: center">${req.body.name}</th>
                  <td style="text-align: center">${req.body.email}</td>
                  <td style="text-align: center">${req.body.text}</td>
                </tr>
              </tbody>
            </table>
          `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({
        message: 'successfuly sent!'
      })
    }
  });

});

app.post('/sendSubData', (req, res) => {
  console.log(req.body, 'data of form');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: 'true',
    port: '465',
    auth: {
      user: 'xavier.mwallace2@gmail.com', // must be Gmail
      pass: 'profxavier'
    }
  });

  var mailOptions = {
    from: 'xavier.mwallace2@gmail.com',
    to: 'jussimpletrading@gmail.com', // must be Gmail
    cc:`xavier.mwallace2@gmail.com`,
    subject: 'Sending Email using Node.js',
    html: `
            <table style="width: 100%; border: none">
              <thead>
                <tr style="background-color: #000; color: #fff;">
                  <th style="padding: 10px 0">E-mail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="text-align: center">${req.body.email}</td>
                </tr>
              </tbody>
            </table>
          `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({
        message: 'successfuly sent!'
      })
    }
  });

});


app.listen(port, function(){
  console.log("Server running on port:" + port);
});
