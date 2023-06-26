// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/config/database';
import { Avaliation } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'

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
    json({message: `HTTP method ${req.method} not allowed`})
  }
  const data = req.body as Omit<Avaliation, 'id' | 'createdAt' | 'updatedAt'>;

  const { title, description } = data;
  try {
    await prisma.avaliation.create({
      data: {title, description}
    })
    return res.status(201).json({ message: 'Avaliation created' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({message:'An error occurred'})
  }
}
