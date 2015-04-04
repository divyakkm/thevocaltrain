
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
		{data: "session", title: "Session"},
		{data: "assigned_student_id", title: "Student Id", visible: false},
		{data: "lesson_id", title: "Lesson Id", visible:false},
		{data: "volunteer_id", title: "Volunteer Id", visible: false},
		{data: "this._id", visible:false}
// 	{
//   tmpl: Meteor.isClient && Template.sessiontable
// }
	]
});

VolprofileController = AppController.extend({
	waitOn: function () {
		return this.subscribe('StudentVolunteer');
	},
	data: {
		CalEvents: CalEvents.find({}),
		StudentVolunteer: StudentVolunteer.find({}),
		Student: Student.find({})
	},
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
