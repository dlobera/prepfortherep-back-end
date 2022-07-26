import mongoose, { Schema } from 'mongoose'

const termSchema = new Schema({
  term: String,
  definition: String,
  mastered: Boolean,
}, {
  timestamps: true
})

const subjectCardSchema = new mongoose.Schema({
  _id: ObjectId,
  title: String,
  term: [termSchema]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }

