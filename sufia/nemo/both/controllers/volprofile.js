
// console.log("in both folder");
TabularTables = {};
Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Books = new Tabular.Table({
	name: "Session List",
	collection: SessionList,
	columns: [
		{data: "date", title: "Date"},
		{data: "time", title: "Time"},
		{data: "assigned_student", title: "Student"},
		{data: "session", title: "Session"}
// 	{
//   tmpl: Meteor.isClient && Template.sessiontable
// }
	]
});

VolprofileController = AppController.extend({
	onBeforeAction: function (pause) {
		AccountsTemplates.ensureSignedIn.call(this, pause);
	},
	onAfterAction: function () {
		Meta.setTitle('Volunteer Profile');
	}
});

VolprofileController.events({
	'click [data-action=doSomething]': function (event, template) {
		event.preventDefault();
	}
});
