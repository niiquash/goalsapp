const express = require('express');
const router = express.Router();
const { deleteGoal, getGoals, setGoal, updateGoal } = require('../controllers/goal')

router.route('/').get(getGoals).post(setGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;