let aboutMessage = 'Issue Tracker API v1.0';

function setMessage(_, { message }) {
  aboutMessage = message;
  return aboutMessage;
}

function getMessage() {
  return aboutMessage;
}

//将这两个函数暴露出去
module.exports = { getMessage, setMessage };
