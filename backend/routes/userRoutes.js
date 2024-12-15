import { Router } from 'express';
import { register, login } from '../controllers/userController.js';
const router = Router();

router.post('/register', async (req, res) => {
  try {
    const id = await register(req.body);
    res.status(201).send({ id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const id = await login(req.body);
    res.status(201).send({ id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default router;
