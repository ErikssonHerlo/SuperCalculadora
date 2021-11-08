const { Router } = require('express');
const axios = require('axios');
const router = new Router();
const workerhost = process.env.WORKER_HOST;
const workerport = process.env.WORKER_PORT;
const worker = `http://${workerhost}:${workerport}/math/operation`;



router.post('/suma',(req,res) =>{   //OPERATION DEL LADO DEL WORKER
    const {op1,op2} = req.body;
    const result = Number(op1) + Number(op2);
    res.status(200).json({resultado: result});
});


module.exports = router;