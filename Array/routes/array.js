const router = require("express").Router();
const Array = require("../models/arrayStore");

router.post('/arrayinsert', async (req, res) => {
    try {
        const array = new Array({ data: req.body.data });
        await array.save();
        res.status(201).send(array);
      } catch (error) {
        res.status(400).send(error);
      }
});

router.get('/arrayprint/:id',  async (req, res) => {
    try {
        const array = await Array.findById(req.params.id);
        if (!array) {
          res.status(404).send('Array not found');
          return;
        }
        res.send(array);
      } catch (error) {
        res.status(500).send(error);
      }
});

router.delete('/arraydelete//:id', async (req, res) => {
    try {
        const array = await Array.findById(req.params.id);
        if (!array) {
          res.status(404).send('Array not found');
          return;
        }
        await array.deleteOne();
        res.send(array);
      } catch (error) {
        res.status(500).send(error);
      }
});

module.exports = router;