VolprofileController = AppController.extend({
	waitOn: function () {
		return this.subscribe('calevents');
	},
	onBeforeAction: function (pause) {
		AccountsTemplates.ensureSignedIn.call(this, pause);
	},
	data: {
		SessionList: SessionList.find({}),
		CalEvents: CalEvents.find({}),
		Lesson: Lesson.find({}),
		Assessment: Assessment.find()
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

// console.log("in both folder");
TabularTables = {};
Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Books = new Tabular.Table({
	name: "Session List",
	collection: SessionList,
	columns: [
		{
			data: "date",
			title: "Date"
		},
		{
			data: "time",
			title: "Time"
		},
		{
			data: "assigned_student",
			title: "Student"
		},
		{
			data: "session",
			title: "Session"
		},
		{
			data: "this._id",
			hidden: true
		}
// 	{
//   tmpl: Meteor.isClient && Template.sessiontable
// }
	]
});