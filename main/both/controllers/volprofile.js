// console.log("in both folder");
TabularTables = {};
Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Sessions = new Tabular.Table({
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
			data: "lesson_name",
			title: "Lesson"
		},
		{
			data: "assigned_student",
			title: "Student"
		},
		{
			data: "assigned_student_id",
			title: "Student",
			visible: false
		},
		{
			data: "lesson_id",
			title: "Lesson Id",
			visible: false
		},
		{
			data: "volunteer_id",
			title: "Volunteer Id",
			visible: false
		},
		{
			data: "notes",
			title: "Notes",
			visible: false
		},
		{
			data: "this._id",
			visible: false
		},
		{
			data: "submittedAt",
			title: "Submitted At",
			visible: false
		},
		{
			data: 'status',
			title: 'Status'
		},
		{
			tmpl: Meteor.isClient && Template.moreDetails
		},


	]
});




VolprofileController = AppController.extend({
	waitOn: function () {
		return [
		this.subscribe('StudentVolunteer'),
		this.subscribe('calevents')]
	},

	onBeforeAction: function (pause) {
		AccountsTemplates.ensureSignedIn.call(this, pause);
	},
	data: {
		SessionList: SessionList.find({}),
		CalEvents: CalEvents.find({}),
		StudentVolunteer: StudentVolunteer.find({}),
		LessonBlock: LessonBlock.find({}),
		Assessment: Assessment.find({}),
		Activity: Activity.find({})
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