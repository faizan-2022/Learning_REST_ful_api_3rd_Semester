const router = require("express").Router();

let queue = [];
let currentSize = queue.length;
let maxSize = 5;

router.post('/queue', (req, res) => {
    let newVal = req.body;
    if (currentSize >= maxSize) {
      res.status(201).send("Queue is Full");
    } else {
      queue[currentSize] = newVal;
      currentSize++;
      res.status(200).send("Element has been added");
    } 
});

router.delete('/removequeue', (req, res) => {
  if (currentSize>=0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
    res.status(201).send("Element has been deleted");
  } else {
    res.status(200).send("Queue is already empty");
  }
});
  

router.get('/front', (req, res) => {
    if (queue.length === 0) {
      res.status(404).send({ message: 'Queue is empty' });
    } else {
      const element = queue[0];
      res.send({ message: 'Element at the front of the queue', element });
    }
});
  
router.get('/end', (req, res) => {
    if (queue.length === 0) {
      res.status(404).send({ message: 'Queue is empty' });
    } else {
      const element = queue[queue.length - 1];
      res.send({ message: 'Element at the end of the queue', element });
    }
});
  
router.get('/size', (req, res) => {
    res.send(queue);
  });

module.exports = router;