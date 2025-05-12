// const jwt = require('jsonwebtoken');
// let secretkey='secretkey'
// const token= jwt.sign({user:123,},secretkey);
// const verify = jwt.verify(token,secrekey); 
// console.log(verify);
 const express = require('express');
const { google } = require('googleapis');

const app = express();
// Set up OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  '793645571260-vhcv5mc0fhuhbq7gsok8pchesvf4osgo.apps.googleusercontent.com',
  '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',
  'http://localhost:3000/oauth2callback'
);

// Define the scopes you need
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

// Step 1: Redirect to Google's OAuth 2.0 consent screen
app.get('/auth', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.redirect(url);
});

// Step 2: Google redirects back with the code
app.get('/oauth2callback', async (req, res) => {
  const code = req.query.code;

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Now you can use the authenticated client
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
    const events = await calendar.events.list({
      calendarId: 'primary',
      maxResults: 5,
      singleEvents: true,
      orderBy: 'startTime',
    });

    res.send(events.data);
  } catch (error) {
    console.error('Error retrieving access token:', error);
    res.status(500).send('Authentication failed');
  }
});

app.listen(3000, () => {
  console.log('Server listening at http://localhost:3000');
});