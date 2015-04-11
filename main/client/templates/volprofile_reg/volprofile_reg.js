Template.volprofile_reg.rendered = function () {

};

AppController = RouteController.extend({
	layoutTemplate: 'appLayout'
});

AppController.events({
	'click [data-action=logout]': function () {
		AccountsTemplates.logout();
	}
});

ResourcesController = AppController.extend({
	layoutTemplate: 'appLayout'
});