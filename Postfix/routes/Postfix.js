const router = require("express").Router();

router.post('/apiposttest', (req, res) => {
  const infixExpression = req.body.expression;
  const PRECEDENCE = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3,
  };

  const stack = [];
  let postfix = '';

  for (const ch of infixExpression) {
    if (ch === '(') {
      stack.push(ch);
    } else if (ch === ')') {
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        postfix += stack.pop();
      }
      if (stack.length > 0) {
        stack.pop();
      }
    } else if (PRECEDENCE[ch] !== undefined) {
      while (stack.length > 0 && PRECEDENCE[ch] <= PRECEDENCE[stack[stack.length - 1]]) {
        postfix += stack.pop();
      }
      stack.push(ch);
    } else {
      postfix += ch;
    }
  }

  while (stack.length > 0) {
    postfix += stack.pop();
  }

  res.send({ postfix });
});

module.exports = router;