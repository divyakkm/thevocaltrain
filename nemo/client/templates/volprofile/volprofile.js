Template.volprofile.rendered = function () {

};

AppController = RouteController.extend({
	layoutTemplate: 'appLayout'
});

AppController.events({
	'click [data-action=logout]': function () {
		AccountsTemplates.logout();
	}
});

VolProfileController = AppController.extend({
	layoutTemplate: 'appLayout'
});