const router = require("express").Router();

let array = [[], []];

router.post('/insert', (req, res) => {
    let rows = req.body;
    let cols = req.body;
    let value = req.body;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            array[i][j] = value;
        }
    }
    res.status(200).send("Element has been inserted");
});

router.get('/get', (req, res) => {
    res.send(array);
});

module.exports = router;