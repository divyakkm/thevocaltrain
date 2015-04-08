AppController = RouteController.extend({
	layoutTemplate: 'appLayout'
});

AppController.events({
	'click [data-action=logout]': function () {
		AccountsTemplates.logout();
	}
});

ScheduleNewController = AppController.extend({
	data: {
		CalEvents: CalEvents.find({}),
		StudentVolunteer: StudentVolunteer.find({})

	},
	onBeforeAction: function (pause) {
		AccountsTemplates.ensureSignedIn.call(this, pause);
	}
});

ScheduleNewController.events({
	'click [data-action=doSomething]': function (event, template) {
		event.preventDefault();
	}
});