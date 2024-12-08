import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: {
    type: String, // Or use mongoose.Schema.Types.ObjectId if referencing a User model
    required: true,
  },
  plan: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  credits: {
    type: Number,
    required: true,
  },
  payments: {
    type: Boolean,
    default: false, // Payment status: false = pending, true = completed
  },
  date: {
    type: Date,
    default: Date.now, // Automatically set the current date and time
  },
});

const transactionModel =
  mongoose.models.transaction || mongoose.model('transaction', transactionSchema);

export default transactionModel;
