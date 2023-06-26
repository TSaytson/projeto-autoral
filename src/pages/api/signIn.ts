import { prisma } from '@/config/database';
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).
      json({ message: `HTTP method ${req.method} not allowed` })
  }
  const { email, password } = req.body as Record<string, string>;

  if (!email || !password) return res.status(422).
    json({ message: 'All fields are required' });
  
  try {

    const user = await prisma.user.findFirst({
      where: { email }
    });

    if (!user || !bcrypt.compareSync(password, user.password))
      return res.status(404).json({ message: 'Incorrect credentials' });
    const session = prisma.session.findFirst({
      where: { userId: user.id }
    });
    if (!session) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET || 'secret'
      )
      await prisma.session.create({
        data: { userId: user.id, token }
      });
      return res.status(201).json({message: token})
    }
    return res.status(201).json({message: 'session already exists' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'An error occurred' })
  }
}