request.get(pathUrl, function (error, resp, body) {
  if (error) throw error;
  const user = {};
  for (const task of JSON.parse(body)) {
    if (task.completed) {
      if (user[task.userId]) {
        user[task.userId]++;
      } else {
        user[task.userId] = 1;
      }
    }
  }
  
  const userCount = Object.keys(user).length;
  if (userCount >= 2) {
    console.log(JSON.stringify(user));
  } else {
    console.log(user);
  }
});

