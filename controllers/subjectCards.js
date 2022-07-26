import { SubjectCard } from "../models/subjectCard.js"

function create(req, res) {
  req.body.owner = req.user.profile
  SubjectCard.create(req.body)
  .then(subjectCard => {
    SubjectCard.findById(subjectCard._id)
    .populate('owner')
    
  })


}

export {
  create,
}