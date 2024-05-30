const nodemailer = require("nodemailer");

function Otpcreator() {
  let r = Math.random();
  r = Math.round(r * 1000 + 1000);
  return r;
}

const SendMail = async (clientMail, otp) => {
  try {
    console.log(clientMail);

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hokrexofficial@gmail.com",
        pass: "wvba xpiy drki nuup",
      },
    });

    const mailoptions = {
      from: "Hokrex 👕 <hokrexofficial@gmail.com> ",
      to: clientMail,
      subject: "Hokrex - One-Time Password (OTP) Code",
      text: `Your code is ${otp}`,
      html: `<h1>Hokrex</h1>
       <h2>Dear ${clientMail},</h2>
       <p>To ensure the security of your account, we have generated a One-Time Password (OTP) for your recent request. Please find your OTP code below: <br /></p>
       <p><i>Your OTP Code:</i> <b>${otp}</b></p>
       <p>Thank you for helping us keep your account secure.<p/>

       <p>Best regards. <p/>
       <h3>Hokrex - Official</h3>
       `,
    };

    const result = await transport.sendMail(mailoptions);
    console.log(result);
  } catch (error) {
    console.log("Enter a valid Email", error.message);
  }
};

module.exports = {
  SendMail: SendMail,
  Otpcreator: Otpcreator,
};
