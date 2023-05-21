console.log("Init Twilio");
const accountSid = "AC244dbce5ea68a7cb404063081b6a26fe";
const authToken = "80a9a749e621065c8b86c223812fbf2b";
const client = require('twilio')(accountSid, authToken);
client.messages
    .create({
        from: 'whatsapp:+12543213630',
        body: 'Hello there Nodejs!',
        to: 'whatsapp:+51989123131'
    })
    .then(message => console.log(message));

//+12543213630
console.log("End Twilio");