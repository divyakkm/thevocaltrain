Meteor.subscribe("lesson");
Meteor.subscribe("assessment");
Meteor.subscribe("session");

// Set session defaults
Session.setDefault('get_SessionRow', null);
Session.setDefault('showModalEvent', false);
Session.setDefault('volunteer_id', Meteor.userId());
Session.setDefault('session_id', "551cae3cb1ddc9927db19e89");

Template.sessiontable.showModalEvent = function () {
	return Session.get('showModalEvent');
}

Template.showModal.helpers({
	temp: function () {
		//		var ref = {
		//				name: "Chunks",
		//				class: "myClass anotherClass",
		//				value: 123
		//			}
		//		console.log("inside temp");
		var ref = CalEvents.find({
			title: SessionList.find({
				_id: "551cae3cb1ddc9927db19e89"
			}).fetch()[0].assigned_student
		}).fetch()[0];
		//		console.log(ref);
		return ref;
	},
	lsn: function () {
		console.log("inside lsn");
		var ref1 = Lesson.find().fetch()[0];
		//		var ref1 = {
		//			name: "Divi",
		//			class: "myClass anotherClass",
		//			value: 123
		//		}
		console.log(ref1);
		return ref1;
	}
})

Template.showModal.events({
	'click .save': function (temp, tmpl) {
		console.log("inside showmodal event");
		console.log(temp);
	}
})

Template.sessiontable.events({
	'click tbody > tr': function (event, view) {
		var dataTable = $(event.target).closest('table').DataTable();
		var rowData = dataTable.row(event.currentTarget).data();
		Session.set('session_id', rowData._id._str);
		//		console.log(window.$log1 = rowData);
		Session.set('showModalEvent', true);
		$('#showModalid').modal("show");
	}
})

Template.sessiontable.helpers({
	selector: function () {
		return {
			volunteer_id: Meteor.userId()
		}
	}
});

Template.carousel.rendered = function () {
	$('#carousel').slick({
		dots: true,
		arrows: true
	});
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