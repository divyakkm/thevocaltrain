Template.volsession.rendered = function () {

};

Session.setDefault('volunteer_id', Meteor.userId());
//Session.get('ref_session', session_id);

Template.studentdetails.temp = function () {
	// run a query to the database
	var ref  = SessionList.find({
		_id: Session.get('session_id')
	});
	return ref;
}

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