const functions = require("firebase-functions");

const TWILIO_ACCOUNT_SID = functions.config().twilio.account_sid;
const TWILIO_AUTH_TOKEN = functions.config().twilio.auth_token;
const sms = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

function getSmsBody(companyName) {
  return `
Felicitari pentru infiintarea companiei ${companyName}! solutiionline.com va ofera oportunitatea de a va lansa compania pe internet pentru a beneficia te toate avantajele aduse de piata online!

Un website crește sansa de sucess a companiei dumneavoastră cu pana la 70%, contactați-ne cat mai rapid pentru a incepe sa beneficiați de advantajele aduse de internet in cel mai scurt timp!
`
}

exports.loadData = functions.https.onCall(async (data, context) => {
  console.log(data);

  const message = await sms.messages.create({
    body: getSmsBody(data[0][1]),
    messagingServiceSid: 'MG088b0a186b52a14c16a1a602257f9430',
    from: "SolutiiOnline",
    statusCallback: '',
    to: '+4' + data[0][6]
  })

  console.log(message);

  return data;
});
