const router = require('express').Router();
const thoughtController = require('../../controllers/thoughtController');

router.route('/')
  .get(thoughtController.getAllThoughts)
  .post(thoughtController.createThought);

router.route('/:id')
  .get(thoughtController.getThoughtById)
  .put(thoughtController.updateThought)
  .delete(thoughtController.deleteThought);

router.route('/:thoughtId/reactions')
  .post(thoughtController.createReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(thoughtController.deleteReaction);

module.exports = router;
