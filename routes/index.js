const express = require('express');
const router = express.Router();

router.get('/name', (req, res) => {
    res.send('Deeqa Abdulkadir');
});

router.get('/greeting', (req, res) => {
    res.send('Hello! My name is Deeqa Abdulkadir and my student number is n01628612');
});

router.get('/add', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);
    const result = x + y;
    res.send(`The result of adding ${x} and ${y} is ${result}`);
});

router.get('/calculate', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const operation = req.query.operation;
    let result;

    switch (operation) {
        case '+':
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
            result = a ** b;
            break;
        default:
            return res.send('Invalid operation');
    }

    res.send(`The result of ${a} ${operation} ${b} is ${result}`);
});

module.exports = router;
