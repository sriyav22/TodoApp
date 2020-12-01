import express from 'express';
import stickyController from './../controllers/sticky.controller';

const router = express.Router();

/**
 * Search - GET /lists
 * Create - POST /lists
*/
router.route('/lists')
    .get(stickyController.index)
    .post(stickyController.create);

/**
 * Retrieve - GET /lists/${id}
 * Update - GET /lists/${id}
 * Delete - DELETE /lists/${id}
*/
router.route('/lists/:id')
    .get(stickyController.get)
    .put(stickyController.update)
    .delete(stickyController.remove);

export default router;