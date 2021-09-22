const router = require('express').Router();
const employeeController = require('../controller/employee');

   //async function (not simmultaneously or single vlaue at a time)
router.post('/add', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await employeeController.add(req.body);
	res.send(response);
})
router.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await employeeController.fetch();
	res.send(response);
})
router.get('/fetchdata', async (req, res) => {
	const response = await employeeController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await employeeController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await employeeController.update(req.query.id, req.body);
	res.send(response);
})

module.exports = router;