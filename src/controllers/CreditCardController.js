import { Router } from 'express';

const router = Router();

router.post('/add', (req, res) => {
    res.send('hello world');
});

router.get('/all', (req, res) => {
    res.send('hello world');
});

export default router;