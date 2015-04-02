Template.resources.rendered = function () {

};

AppController = RouteController.extend({
	layoutTemplate: 'appLayout'
});

AppController.events({
	'click [data-action=logout]': function () {
		AccountsTemplates.logout();
	}
});

VolSessionController = AppController.extend({
	layoutTemplate: 'appLayout'
});