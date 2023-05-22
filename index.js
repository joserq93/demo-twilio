console.log("Init Twilio");
const accountSid = "AC244dbce5ea68a7cb404063081b6a26fe";
const authToken = "dfc6adf10f72d209996546d69e3bfcfd";
const client = require('twilio')(accountSid, authToken);
client.messages
    .create({
        from: 'whatsapp:+12543213630',
        body: 'Probando 1,2,3,4',
        to: 'whatsapp:+51989123131'
    })
    .then(message => console.log(message));

//+12543213630
// TEST para ver que pasa
console.log("End Twilio");