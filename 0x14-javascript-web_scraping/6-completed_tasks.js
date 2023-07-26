#!/usr/bin/node

const request = require('request');

request(process.argv[2], function (err, resp, body) {
  if (!err) {
    const data = JSON.parse(body);
    let checkers = 0;
    data.forEach((element) => {
      if (element.completed) {
        checkers++;
      }
    });

    console.log(`Total Checkers: ${checkers}`);
  }
});
