import nodemailer from "nodemailer";

const sendEmail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,   // your email
      pass: process.env.EMAIL_PASS,   // app password
    },
  });

  const mailOptions = {
    from: `"BookVillage Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // jaha mail receive karni hai
    subject: "📩 New Contact Message - BookVillage",
    html: `
      <h2>New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
