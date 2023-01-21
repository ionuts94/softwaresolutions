const functions = require("firebase-functions");
const nodemailer = require('nodemailer');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'ionutsv94@gmail.com',
    pass: 'qcquitovjzpuipvo'
  }
});

exports.sendEmail = functions.firestore.document('messages/{messageId}').onCreate((snap, context) => {
  const docData = snap.data();

  const mailOptions = {
    from: `ionutsv94@gmail.com`,
    to: ['ionut.s_94@yahoo.com', 'iordaighe.alin@gmail.com'],
    subject: docData.subject,
    text: `Name: ${docData.name}. User email: ${docData.email}. ${docData.message}`
  };

  console.log(`Sending email to ${docData.email}`);

  return transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      console.log(error)
      return
    }
    console.log("Sent!")
  });
});