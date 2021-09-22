const router = require('express').Router();
const taskController = require('./../controller/task');

router.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await taskController.fetch();
	res.send(response);
})

router.post('/add', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await taskController.add(req.body);
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {
	const response = await taskController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await taskController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await taskController.update(req.query.id, req.body);
	res.send(response);
})

  router.get('/match', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await taskController.match();
	res.send(response);
})
  router.get('/sort', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await  taskController.sort();
	res.send(response);
})    

router.get('/search', async (req, res) => {
	const response = await taskController.search(req.query.name);
	res.send(response);
})


module.exports = router;