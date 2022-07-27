import { SubjectCard } from "../models/subjectCard.js"

function create(req, res) {
  req.body.owner = req.user.profile
  SubjectCard.create(req.body)
  .then(subjectCard => {
    SubjectCard.findById(subjectCard._id)
    .populate('owner')
    .then(populatedSubjectCard => {
      res.json(populatedSubjectCard)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function index(req,res) {
  SubjectCard.find({})
  .populate('owner')
  .then(subjectCards => {
    res.json(subjectCards)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function update(req, res) {
  SubjectCard.findById(req.params.id)
  .then(subjectCard => {
    if (subjectCard.owner._id.equals(req.user.profile)) {
      SubjectCard.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .populate('owner')
      .then(updatedSubjectCard => {
        res.json(updatedSubjectCard)
      })
    } else {
      res.status(401).json({err: "Not authorized!"})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}
// function createTerm(req, res) {
//   console.log(req.body)
//   console.log(req.user)
//   req.body.owner = req.user.profile
//   SubjectCard.findById(req.params.id)
//   .then(term => {
//     term.terms.push(req.body)
//     term.save()
//     .then(cTerm => {
//       cTerm.populate([
//         {path:"terms",
//           populate: {path:"owner"}}
//       ])
//       .then(pTerm => {
//         res.json(pTerm)
//       })
//     })

//   })
//   .catch(err => {
//     console.log(err)
//     res.status(500).json({err: err.errmsg})
//   })
// }

function deleteCard(req, res) {
  SubjectCard.findById(req.params.id)
  .then(subjectCard => {
    if (subjectCard.owner._id.equals(req.user.profile)) {
      SubjectCard.findByIdAndDelete(subjectCard._id)
      .then((deletedSubjectCard) => {
        res.json(deletedSubjectCard)
      })
    } else {
      res.status(401).json({err: "Not authorized!"})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}


export {
  create,
  index,
  update,
  deleteCard as delete,
  // createTerm
}