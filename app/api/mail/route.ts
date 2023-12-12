import { sendEmail } from '@/services/mail-service';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await sendEmail(
    'kiran@example.com',
    'Welcome to NextAPI',
    'This is a test email from NextAPI',
  );

  return res.status(200).json({ message: 'Email sent successfully' });
}
