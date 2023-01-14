const express = require('express');

const { index, fetchTask, create, update, deleteTask } = require('../controllers/Task');
const idChecker = require('../middlewares/idChecker');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *          - name
 *          - status
 *       properties:
 *         name:
 *           type: string
 *           description: The task's name.
 *           example: Learn about NodeJS.
 *         status:
 *           type: string
 *           description: The task's status.
 *           example: backlog
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The Todo app
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder tasks.
 *     description: Retrieve a list of tasks from JSONPlaceholder.
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/Task'
 */
router.get('/', index);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: The task details by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The Task was not found
 */
router.route('/:id').get(idChecker(), fetchTask);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: The task was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 */
router.post('/', create);

/**
 * @swagger
 * /tasks/{id}:
 *  put:
 *    summary: Update the task by the id
 *    tags: [Tasks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The task id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *    responses:
 *      200:
 *        description: The task was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Task'
 *      404:
 *        description: The task was not found
 *      500:
 *        description: Some error happened
 */
router.route('/:id').put(idChecker(), update);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Remove the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *
 *     responses:
 *       200:
 *         description: The task was deleted
 *       404:
 *         description: The task was not found
 */
router.route('/:id').delete(idChecker(), deleteTask);

module.exports = router;
