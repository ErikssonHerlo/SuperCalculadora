const { Router } = require('express');
const axios = require('axios');
const router = new Router();
const workerhost = process.env.WORKER_HOST;
const workerport = process.env.WORKER_PORT;
const worker = `http://${workerhost}:${workerport}/math/operation`;



router.post('/suma', async (req, res) => {
    const {op1,op2} = req.body;
	const params = { op1: op1, op2: op2 };

	try {
		const resultado = await axios.get(`${worker}/suma`, { port: Number.parseInt(workerport), params });
        console.log(resultado.data);
		res.status(200).json(resultado.data);
	} catch (error) {
		console.error(error);
		res.status(200).json({error});
	}
});

router.post('/resta', async (req, res) => {
    const {op1,op2} = req.body;
	const params = { op1: op1, op2: op2 };

	try {
		const resultado = await axios.get(`${worker}/resta`, { port: Number.parseInt(workerport), params });
        console.log(resultado.data);
		res.status(200).json(resultado.data);
	} catch (error) {
		console.error(error);
		res.status(200).json({error});
	}
});

router.post('/multiplicacion', async (req, res) => {
    const {op1,op2} = req.body;
	const params = { op1: op1, op2: op2 };

	try {
		const resultado = await axios.get(`${worker}/multiplicacion`, { port: Number.parseInt(workerport), params });
        console.log(resultado.data);
		res.status(200).json(resultado.data);
	} catch (error) {
		console.error(error);
		res.status(200).json({error});
	}
});

router.post('/division', async (req, res) => {
    const {op1,op2} = req.body;
	const params = { op1: op1, op2: op2 };

	try {
		const resultado = await axios.get(`${worker}/division`, { port: Number.parseInt(workerport), params });
        console.log(resultado.data);
		res.status(200).json(resultado.data);
	} catch (error) {
		console.error(error);
		res.status(200).json({error});
	}
});


module.exports = router;