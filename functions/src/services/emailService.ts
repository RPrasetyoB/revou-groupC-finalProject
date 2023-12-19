import nodemailer from 'nodemailer';
import { BE_URL, FE_URL } from '../utils/appUrl';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SERVER_EMAIL,
    pass: process.env.SERVER_PASSWORD,
  }
});

const sendVerificationEmail = async (email: string, verificationToken: string) => {
  const buttonName = 'Verify email'
  const buttonHref = `${FE_URL}/v1/verify?token=${verificationToken}`
  const buttonReset = `<a href="${buttonHref}" style="padding: 8px 14px; border: none;border-radius: 5px; background-color: dodgerblue; color: white; font-size: 14px;text-decoration: none;font-family: sans-serif;" >${buttonName}</a>`

  const emailMessage = `
    You are recieving this email because we need email verification for your account.
    <br>
    <div style="width: 100%; text-align: left; margin-top: 20px;" >
    ${buttonReset}
    </div>
    <br>

    This link will be active for 10 minutes, after that link email verification will be expired
    <br> <br>

    Thankyou, <br>
    <b>Helena</b>
    <br> <br>

    <hr>
    If you are having trouble clicking the "Verify email" button, copy and pase URL below into your web browser
    <br>
    ${buttonHref}
  `
  setTimeout(async () => {
    const mailOptions = {
      from: process.env.SERVER_EMAIL,
      to: email,
      subject: 'Helena Email Verification',
      html: emailMessage,
    };
    await transporter.sendMail(mailOptions);
  }, 5000);
};

const sentResetPassword = async (email: string, token: string, userId : number) => {
  const buttonName = 'Reset Password'
  const buttonHref = `${FE_URL}/reset-password/${token}/${userId}`
  const buttonReset = `<a href="${buttonHref}" style="padding: 8px 14px; border: none;border-radius: 5px; background-color: dodgerblue; color: white; font-size: 14px;text-decoration: none;font-family: sans-serif;" >${buttonName}</a>`

  const emailMessage = `
    You are recieving this email because we recivied as password reset request for your account.
    <br>
    <div style="width: 100%; text-align: left; margin-top: 20px;" >
    ${buttonReset}
    </div>
    <br>

    This link will be active for 10 minutes, after that link password reset will be expired
    If you did not request a password request, no further action is required.
    <br> <br>

    Thankyou, <br>
    <b>Helena</b>
    <br> <br>

    <hr>
    If you are having trouble clicking the "Reset Password" button, copy and pase URL below into your web browser
    <br>
    ${buttonHref}
  `

  try {
    const mailOptions = {
      from: process.env.SERVER_EMAIL,
      to: email,
      subject: 'Reset password',
      html: emailMessage,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
  }
};

export { sendVerificationEmail, sentResetPassword };