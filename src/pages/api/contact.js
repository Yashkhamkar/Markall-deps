// export default function (req, res) {
//   console.log(req.body);
// }
export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "yashkhamkar1100@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "yashkhamkar1100@gmail.com",
    to: "khamkaryash30@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email} Phone No:-${req.body.phone}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
