Items = new Mongo.Collection('items');
// Create a new MongoDB collection for calendar events
CalEvents = new Meteor.Collection('calevents');
StudentVolunteer = new Meteor.Collection('StudentVolunteer');
LessonBlock = new Mongo.Collection('lesson');
SessionList = new Mongo.Collection('session');
Assessment = new Mongo.Collection('assessment');
Activity = new Mongo.Collection('activity');

Items.helpers({

});

Items.before.insert(function (userId, doc) {
	doc.createdAt = moment().toDate();
});

LessonBlock.before.insert(function (userId, doc) {
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