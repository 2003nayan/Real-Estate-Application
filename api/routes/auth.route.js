import express from 'express';

const router = express.Router();

router.post('/register', function (req, res) {
    console.log("Router works!");
})
router.post('/login', function (req, res) {
    console.log("Router works!");
})
router.post('/logout', function (req, res) {
    console.log("Router works!");
})

export default router;