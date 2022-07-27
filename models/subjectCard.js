import mongoose from 'mongoose'

const Schema = mongoose.Schema

// const termSchema = new Schema({
//   term: String,
//   definition: String,
  
// }, {
//   timestamps: true
// })

const subjectCardSchema = new mongoose.Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  title: String,
  term: String,
  definiton: String,
  // m: Boolean

},{
  timestamps: true,
})

const SubjectCard = mongoose.model('SubjectCard', subjectCardSchema)

export { SubjectCard }

