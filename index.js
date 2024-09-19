const express = require('express');
const router = express.Router();

router.get('/name', (req, res) => {
    res.send('Deeqa Abdulkadir');
});

router.get('/greeting', (req, res) => {
    res.send('Deeqa Abdulkadir, Student Number: n01628612');
});

router.get('/add', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);
    if (isNaN(x) || isNaN(y)) {
        return res.status(400).send('Invalid query parameters. Both x and y should be numbers.');
    }
    const result = x + y;
    res.send(`The result of adding ${x} and ${y} is ${result}`);
});

router.get('/calculate', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const operation = req.query.operation;

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('Invalid query parameters. Both a and b should be numbers.');
    }

    let result;
    switch (operation) {
        case '+':
        case '%2B':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '**':
            result = Math.pow(a, b);
            break;
        default:
            return res.status(400).send('Invalid operation. Supported operations are +, -, *, /, **.');
    }

    res.send(`The result of ${a} ${operation} ${b} is ${result}`);
});

module.exports = router;
