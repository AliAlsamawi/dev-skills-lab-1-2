
import * as skillsDb from '../data/skill-db.js'

function index(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error,
      time: req.time
    })
  })
}

function show(req, res){
  skillsDb.findById(req.params.id, function(error, skill){
    res.render('skills/show', {
      skill: skill,
      error: error
    })
  })
}

function newSkills(req, res){
  res.render ('skills/new')
}
function create(req, res) {
  console.log(req.body)
  todoDb.create(req.body, function(error, skills) {
		// Notice we are doing a redirect here!
    res.redirect('/todos')
  })
}

export {
	index,
  show,
  newSkills as new,
  create
}