import mongose from 'mongoose';

const taskSchema = new mongose.Schema({
  task: {
    type: String,
    required: true,
  },
  check: {
    type: Boolean,
    default: false,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  }
});

export default mongose.model('Task', taskSchema);
