const sdk = require('node-appwrite')

const client = new sdk.Client();

// console.log(process.env.API_KEY);        api key is not accessible due to dotev.config(); is not in top of app.js file


// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject(process.env.PROJECT_ID)
//     .setKey(process.env.API_KEY);

// let users = new sdk.Users(client);
// let promise = users.create(sdk.ID.unique(), "email@example.com", "+123456789", "password", "Walter O'Brien");

// promise.then(function (response) {
//     console.log(response);
// }).catch(function (error) {
//     console.log(error);
// });


const storage = new sdk.Storage(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.PROJECT_ID) // Your project ID
    .setKey(process.env.API_KEY) // Your secret API key
;

// const promise = storage.createBucket('676f816800381e8e5cdc', 'files');

// promise.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });



