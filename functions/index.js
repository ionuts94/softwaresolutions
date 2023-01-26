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
  let emailText = ``;

  let html = `
    <html>
      <body>
        <table>
          ${Object.keys(docData).map(key => {
    const value = key === 'created' ? new Date(docData[key].seconds * 1000) : docData[key];
    return `<tr style="margin: 20px;"><td style="font-size: 16px;padding: 5px 10px;"><strong>${capitalize(key)}</strong>: </td><td style="font-size: 16px; padding: 5px 10px;">${value}</td></tr>`
  }).join('')}
        </table>
      </body>
    </html>
  `

  for (let key in docData) {
    emailText = emailText + key + ':' + docData[key] + '\n\n';
  }

  const mailOptions = {
    from: `ionutsv94@gmail.com`,
    to: ['ionut.s_94@yahoo.com', 'iordaighe.alin@gmail.com'],
    subject: docData.subject || 'Software Solutions Enquery',
    html: html
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

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}