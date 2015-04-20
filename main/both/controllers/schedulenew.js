AppController = RouteController.extend({
	layoutTemplate: 'appLayout'
});

AppController.events({
	'click [data-action=logout]': function () {
		AccountsTemplates.logout();
	}
});

ScheduleNewController = AppController.extend({
	waitOn: function () {
		return this.subscribe('calevents');
	},
	data: {
		CalEvents: CalEvents.find({}),
		StudentVolunteer: StudentVolunteer.find({}),
		SessionList: SessionList.find({})
	},
	onBeforeAction: function (pause) {
		AccountsTemplates.ensureSignedIn.call(this, pause);
	},
	onAfterAction: function () {
		Meta.setTitle('Schedule');
	}
});

ScheduleNewController.events({
	'click [data-action=doSomething]': function (event, template) {
		event.preventDefault();
	}
});