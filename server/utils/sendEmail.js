import nodemailer from "nodemailer";

const sendEmail = async ({ name, email, message }) => {
  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: "New Portfolio Contact Message",

      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email Sent Successfully");

  } catch (error) {

    console.log(error);

  }
};

export default sendEmail;