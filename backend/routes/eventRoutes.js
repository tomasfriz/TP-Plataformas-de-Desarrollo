import { Router } from 'express';
import { createEvent, updateEvent, getEvent, getEvents, deleteEvent } from '../controllers/eventController.js';
const router = Router();

router.post('/', async (req, res) => {
  try {
    const id = await createEvent(req.body);
    res.status(201).send({ id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const events = await getEvents();
    res.send(events);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    await updateEvent(req.params.id, req.body);
    res.send({ message: 'Event updated successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const event = await getEvent(req.params.id);
    if (event) {
      res.send(event);
    } else {
      res.status(404).send({ error: 'Event not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await deleteEvent(req.params.id);
    res.send({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default router;
