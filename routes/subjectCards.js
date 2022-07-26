import { Router } from 'express'
import * as subjectCardsCtrl from '../controllers/subjectCards.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, subjectCardsCtrl.index)
router.post('/', checkAuth, subjectCardsCtrl.create)
router.put('/:id', checkAuth, subjectCardsCtrl.update)
router.delete('/:id', checkAuth, subjectCardsCtrl.delete)
export { router }