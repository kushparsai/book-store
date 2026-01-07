import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async ({ name, email, message }) => {
  return await transporter.sendMail({
    from: `"BookVillage Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // admin ko mail
    subject: "📩 New Contact Message",
    html: `
      <h2>New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });
};
