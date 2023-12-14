import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SERVER_EMAIL,
    pass: process.env.SERVER_PASSWORD,
  }
});

const sendVerificationEmail = async (email: string, verificationToken: string) => {
  setTimeout(async () => {
    const mailOptions = {
      from: process.env.SERVER_EMAIL,
      to: email,
      subject: 'Email Verification',
      html: `<p>Click the following link to verify your email: <a href="${process.env.SERVER_URL}/v1/verify?token=${verificationToken}">Verify Email</a></p>`,
    };
    await transporter.sendMail(mailOptions);
  }, 5000);
};

const resendVerificationEmail = async (email: string, verificationToken: string) => {
  setTimeout(async () => {
    const mailOptions = {
      from: process.env.SERVER_EMAIL,
      to: email,
      subject: 'Resend Email Verification',
      html: `<p>Click the following link to verify your email: <a href="${process.env.SERVER_URL}/v1/verify?token=${verificationToken}">Verify Email</a></p>`,
    };
    await transporter.sendMail(mailOptions);
  }, 5000);
};

export { sendVerificationEmail, resendVerificationEmail };