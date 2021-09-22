const router = require('express').Router();
const adminController = require('./../controller/admin');


router.post('/register', async (req, res) => {
    res.send(await adminController.register(req.body));
});
router.get('/', async (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	const response = await adminController.fetch();
	res.send(response);
})
router.post('/login', async (req, res) => {
    res.send(await adminController.login(req.body));
});

/*router.get('/login1', async (req, res) => {
    res.send(await adminController.login1(req.query.name,req.query.password));
});*/

router.post('/add', async (req, res) => {
	const response = await adminController.add(req.body);
	res.send(response);
})

router.get('/fetchdata', async (req, res) => {
	const response = await adminController.fetchdata(req.query.id);
	res.send(response);
})
router.delete('/delete', async (req, res) => {
	const response = await adminController.delete(req.query.id);
	res.send(response);
})
router.put('/update', async (req, res) => {
	const response = await adminController.update(req.query.id, req.body);
	res.send(response);
})

 

module.exports = router;