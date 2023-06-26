import { prisma } from '@/config/database';
import { Session } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

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
  const { email, password, username } = req.body as Record<string, string>;

  if (!email || !password || !username) return res.status(422).
    json({ message: `All fields are required` });

  try {
    const user = await prisma.user.findFirst({
      where: { email }
    });

    if (user) return res.status(409).json({ message: 'User already registred' });

    const hashedPassword = bcrypt.hashSync(password, 10);

    await prisma.user.create({
      data: { email, password: hashedPassword, username }
    });

    return res.status(201).send({message: 'User successfully registred'})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'An error occurred' });
  }
}