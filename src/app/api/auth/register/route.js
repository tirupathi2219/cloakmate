// src/app/api/auth/register/route.js
import { handleDB } from '@/lib/mongodb';
import User from '@/models/user';
import { hashPassword } from '@/utils/auth';

export async function POST(req) {
  const { username, password,email,phoneno } = await req.json();
  
  const db = await handleDB();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
  }

  const passwordHash = await hashPassword(password);
  const user = new User({ email, passwordHash,username,phoneno });
  await user.save();

  return new Response(JSON.stringify({ message: 'User registered',user:user }), { status: 200 });
}
