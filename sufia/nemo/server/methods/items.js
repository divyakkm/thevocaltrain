Meteor.methods({
  'Items.insert': function (params) {
    Items.insert(params);
  }
});

Meteor.methods({
  'CalEvents.insert': function (params) {
    CalEvents.insert(params);
  }
});

Meteor.methods({
  'StudentVolunteer.insert': function (params) {
    StudentVolunteer.insert(params);
  }
});

Meteor.methods({
  'Student.insert': function (params) {
    Student.insert(params);
  }
});
