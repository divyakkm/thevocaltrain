ScheduleController = AppController.extend({
	waitOn: function () {
		return this.subscribe('calevents');
	},
	data: {
		CalEvents: CalEvents.find({}),
		StudentVolunteer: StudentVolunteer.find({})

	},
	onBeforeAction: function (pause) {
		AccountsTemplates.ensureSignedIn.call(this, pause);
	},
	onAfterAction: function () {
		Meta.setTitle('Schedule');
	}
});

ScheduleController.events({
	'click [data-action=doSomething]': function (event, template) {
		event.preventDefault();
	}
});