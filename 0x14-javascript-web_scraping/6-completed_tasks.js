#!/usr/bin/node

const request = require('request');

request(process.argv[2], function (err, resp, body) {
  if (!err) {
    const data = JSON.parse(body);
    const checkers = {};
    data.forEach((element) => {
      if (element.completed && checkers[element.userId] === undefined) {
        checkers[element.userId] = 1;
      } else if (element.completed) {
        checkers[element.userId] += 1;
      }
    });

    // Calculate the total number of checkers
    const totalCheckers = Object.values(checkers).reduce((acc, count) => acc + count, 0);

    console.log(`Total Checkers: ${totalCheckers}`);
  }
});
