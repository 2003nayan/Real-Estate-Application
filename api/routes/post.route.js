import express from 'express';

const router = express.Router();

router.get('/test', function (req, res) {
    console.log("Router works!");
})
router.post('/test', function (req, res) {
    console.log("Router works!");
})
router.put('/test', function (req, res) {
    console.log("Router works!");
})
router.delete('/test', function (req, res) {
    console.log("Router works!");
})

export default router;