// src/models/User.js
import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: { 
    type: String, 
    required: [true, 'Username is required'], // Custom error message
    unique: true, 
    trim: true, // Remove extra spaces
  },
  passwordHash: { 
    type: String, 
    required: [true, 'Password is required'], // Custom error message
  },
  username: { 
    type: String, 
    required: [true, 'Username is required'], // Custom error message
    trim: true, // Remove extra spaces
  },
  phoneno: { 
    type: String, 
    require: [true, 'Username is required'], // Custom error message 
    trim: true, // Remove extra spaces
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Use cached model if it exists, otherwise create a new one
const User = models.User || model('User', userSchema, 'userdata');

export default User;
