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

const sentResetPassword = async (email: string, token: string, userId : number) => {
  try {
    const mailOptions = {
      from: process.env.SERVER_EMAIL,
      to: email,
      subject: 'Reset password',
      html: `<p>Click the following link to reset password: <a href="http://localhost:5173/request-reset/${token}/${userId}">Reset Password</a></p>`,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
  }
};

export { sendVerificationEmail, sentResetPassword };