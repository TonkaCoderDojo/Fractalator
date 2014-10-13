var accountSid = ''; // Fill this in when account is made.
var authToken = "{{ auth_token }}"; //not sure what this is, do something here
var client = require('twilio')(accountSid, authToken);
 
client.messages("message.sid").get(function(err, message) {
    console.log(message.body);
});
