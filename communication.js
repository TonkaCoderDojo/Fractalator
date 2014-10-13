var accountSid = ''; // Fill this in when account is made.
var authToken = "{{ auth_token }}"; // Not sure what this is, do something here.
var client = require('twilio')(accountSid, authToken);

var app = require('express'); // Move this if necessary.
app.POST('/receive',function() {});

client.messages(message.sid).get(function(err, message) {
    var body = message.body;
    var number_regex = /[1234567890]{1,50}/; // Change the latter number depending on the math constraints.
    var numbers = body.match(number_regex); // match should return an array with the matches in them, if any.
    if (numbers.length < 2) {
        // React accordingly here
    } else if (numbers.length > 2) {
        // React accordingly here
    } else {} // Do we need something here?
});
