import nodemailer from 'nodemailer';

// Set up your email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Define the email options
const defaultMailOptions: nodemailer.SendMailOptions = {
  from: 'your-email@gmail.com',
};

// Export a function to send emails
export const sendEmail = async (to: string, subject: string, text: string) => {
  const mailOptions: nodemailer.SendMailOptions = {
    ...defaultMailOptions,
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};
