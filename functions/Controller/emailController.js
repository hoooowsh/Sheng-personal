const nodemailer = require("nodemailer");

async function sendContactEmail(req, res, next) {
  try {
    const { email, name, phone, message } = req.body;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: "My Web <haoshengpersonalweb@gmail.com>",
      to: "haosheng950403@gmail.com",
      subject: "My Web Message",
      html: `<p>Sender Name: ${name}.</p> <br></br> <p>Sender Phone: ${phone}.</p> <br></br> <p>Sender Email: ${email}.</p> <br></br> <p>Sender Message: ${message}</p>`,
    });
    res.status(200).send({ success: true });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  sendContactEmail,
};
