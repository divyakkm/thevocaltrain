Session.get('student_id', student_id);
console.log(Session.get('student_id', student_id));


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

ResourcesController = AppController.extend({
	layoutTemplate: 'appLayout'
});