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

  // USER EMAIL
  to: email,

  subject: "Message Received Successfully",

  html: `
    <h2>Hello ${name},</h2>

    <p>
      Thank you for contacting me.
    </p>

    <p>
      I received your message and will reply soon.
    </p>

    <hr />

    <h3>Your Message:</h3>

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