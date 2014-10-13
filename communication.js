var accountSid = ''; // Fill this in when account is made.
var authToken = "{{ auth_token }}"; // Not sure what this is, do something here
var client = require('twilio')(accountSid, authToken);

var app = require('express');
app.POST('/receive',function() {});

client.messages(message.sid).get(function(err, message) {
    var body = message.body;
    var number_regex = /[1234567890]{1,50}/;
    var numbers = body.match(number_regex);
});
