import mongoose from 'mongoose'

const Schema = mongoose.Schema

const termSchema = new Schema({
  term: String,
  definition: String,
  mastered: Boolean,
}, {
  timestamps: true
})

const subjectCardSchema = new mongoose.Schema({
  _id: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  title: String,
  term: [termSchema]
},{
  timestamps: true,
})

const SubjectCard = mongoose.model('SubjectCard', subjectCardSchema)

export { SubjectCard }

