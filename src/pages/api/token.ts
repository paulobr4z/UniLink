import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from 'next'

export default function verifyToken(request: NextApiRequest , response: NextApiResponse) {
  const { token, secret } = JSON.parse(request.body);

  try {
    const signature = jwt.decode(token, secret);
    response.status(200).json(signature);
  } catch (error) {
    response.status(400).json({ error })
  }
}
