Items = new Mongo.Collection('items');
// Create a new MongoDB collection for calendar events
CalEvents = new Meteor.Collection('calevents');
StudentVolunteer = new Meteor.Collection('student_volunteer');

Items.helpers({

});

Items.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

CalEvents.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});