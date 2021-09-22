const router = require('express').Router();
const statusController = require('./../controller/status');


router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await statusController.fetch();
	res.send(response);
})

router.post('/add', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await statusController.add(req.body);
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {
	const response = await statusController.fetchdata(req.query.id);
	res.send(response);
})


module.exports = router;