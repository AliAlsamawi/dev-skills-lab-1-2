import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)

router.get('/', skillsCtrl.index)
router.get('/:id', skillsCtrl.show)

router.get('/', function(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
})



export {
  router,
  skillsCtrl,
}