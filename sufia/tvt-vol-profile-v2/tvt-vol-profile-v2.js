myCollection = new Mongo.Collection('vol_profile_table');

console.log(myCollection);


TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Books = new Tabular.Table({
  name: "Session List",
  collection: myCollection,
  columns: [
    {data: "date", title: "Date"},
    {data: "time", title: "Time"},
    {data: "assigned_student", title: "Student"},
    {data: "session", title: "Session"},
  ]
});




if (Meteor.isClient) {
  Template.sessiontable_tab.helpers({
  selector: function() {
    return {volunteer_id: Meteor.userId()}
  }
});

  Session.setDefault('showSIP', false);

  Template.sessiontable_tab.showSIP = function() {
        return Session.get('showSIP');
};

  Template.sessiontable_tab.events({
  'click tr': function (event) {
    console.log('clicked')
    Session.set('showSIP', true);
    $('#showSIP').modal("show");
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
  }
});

// Template.sessiontable.myCollection = function () {return myCollection;};
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
