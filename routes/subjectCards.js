import { Router } from 'express'
import * as subjectCardsCtrl from '../controllers/subjectCards.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/

export { router }