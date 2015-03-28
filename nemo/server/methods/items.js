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
