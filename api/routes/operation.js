const { Router } = require('express');
const axios = require('axios');
const router = new Router();
const workerhost = process.env.WORKER_HOST;
const workerport = process.env.WORKER_PORT;
const worker = `http://${workerhost}:${workerport}/math/operation`;



router.post('/math/suma', async (req, res) => {
    const {op1,op2} = req.body;
	const params = { op1: op1, op2: op2 };

	try {
		const resultado = await axios.get(worker, { port: Number.parseInt(workerport), params });
		//const save = await setOperation(operation, resultado.data.ans);
		res.status(200).json(resultado);
	} catch (error) {
		console.error(error);
		res.status(200).json({error});
	}
});


module.exports = router;