Items = new Mongo.Collection('items');
// Create a new MongoDB collection for calendar events
CalEvents = new Meteor.Collection('calevents');
StudentVolunteer = new Meteor.Collection('student_volunteer');
//session = new Meteor.Collection('session');
Items.helpers({

});

Items.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

CalEvents.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

StudentVolunteer.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

SessionList = new Mongo.Collection('session');
