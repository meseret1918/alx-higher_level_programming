#!/usr/bin/node

const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request(apiUrl, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const todos = JSON.parse(body);
    const completedUsers = {};

    todos.forEach((todo) => {
      if (todo.completed) {
        if (completedUsers[todo.userId] === undefined) {
          completedUsers[todo.userId] = 1;
        } else {
          completedUsers[todo.userId]++;
        }
      }
    });

    for (const userId in completedUsers) {
      console.log(`User ID: ${userId}, Completed Tasks: ${completedUsers[userId]}`);
    }
  } else {
    console.error('Error retrieving data from the API:', error);
  }
});
