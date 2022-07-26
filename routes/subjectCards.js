import { Router } from 'express'
import * as subjectCardsCtrl from '../controllers/subjectCards.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
// router.get('/', subjectCardsCtrl.index)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, subjectCardsCtrl.create)
export { router }