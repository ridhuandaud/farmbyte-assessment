import { Router } from 'express'
import * as taskController from '../controller/task.controller'

const router = Router()


router.get('/create', taskController.create)

router.get('/:id/completed', taskController.completed)
router.get('/:id/incomplete', taskController.incomplete)

router
    .route('/')
    .get(taskController.index)
    .post(taskController.store)

router.route('/:id')
    .get(taskController.edit)
    .post(taskController.update)

export default router