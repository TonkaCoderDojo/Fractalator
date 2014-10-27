var accountSid = ''; // Fill this in when account is made.
var authToken = "{{ auth_token }}"; // Not sure what this is, do something here.
var client = require('twilio')(accountSid, authToken);

var app = require('express'); // Move this if necessary.
app.POST('/receive',function() {});

client.messages(message.sid).get(function(err, message) {
    var number_regex = /\d{50}/; // Change the number depending on the math constraints.
    var numbers = message.body.match(number_regex); // match should return an array with the matches in them, if any.
    if (numbers.length < 2) {
        client.messages.create({
            body: "You did not send enough numbers. Please try again.",
            to: message.from, // Not sure if this is correct, and the documentation doesn't seem to help.
            from: "" // Put number here.
        }, function(err, message) {
            process.stdout.write(message.sid); } // Change this if needed; it was in the Twilio documentation.
    } else if (numbers.length > 2) {
        client.messages.create({
        /* Right now, I'm assuming that we only want two numbers.
        Alternatively, we could just take the first two that they send in.
        If we want to do that, just change it. */
            body: "You sent too many numbers. Please try again.",
            to: message.from, // Again, unsure if this is correct.
            from: "" // Put number here.
        }, function(err, message) {
            process.stdout.write(message.sid); }
    } else {} // Do something here.
});
