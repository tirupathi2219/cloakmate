// src/app/api/auth/register/route.js
import { connectToDatabase } from '@/lib/mongodb';
import User from '@/models/user';
import { hashPassword } from '@/utils/auth';

export async function POST(req) {
  const { username, password } = await req.json();
  
  const { db } = await connectToDatabase();
  console.log("user===",{username,password,db,User,req})
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
  }

  const passwordHash = await hashPassword(password);
  const user = new User({ username, passwordHash });
  await user.save();

  return new Response(JSON.stringify({ message: 'User registered' }), { status: 201 });
}
