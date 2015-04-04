Items = new Mongo.Collection('items');
// Create a new MongoDB collection for calendar events
CalEvents = new Meteor.Collection('calevents');
StudentVolunteer = new Meteor.Collection('student_volunteer');
Lesson = new Mongo.Collection('lesson');
SessionList = new Mongo.Collection('session');
Assessment = new Mongo.Collection('assessment');

Items.helpers({

});

Items.before.insert(function (userId, doc) {
	doc.createdAt = moment().toDate();
});

Lesson.before.insert(function (userId, doc) {
	doc.createdAt = moment().toDate();
});

CalEvents.before.insert(function (userId, doc) {
	doc.createdAt = moment().toDate();
});

StudentVolunteer.before.insert(function (userId, doc) {
	doc.createdAt = moment().toDate();
});

Assessment.before.insert(function (userId, doc) {
	doc.createdAt = moment().toDate();
});