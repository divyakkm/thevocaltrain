// Set session defaults
Session.setDefault('get_SessionRow', null);
Session.setDefault('showModalEvent', false);
Session.setDefault('volunteer_id', Meteor.userId());
Session.setDefault('session_id', "551cae3cb1ddc9927db19e89");

Template.sessiontable.showModalEvent = function () {
	return Session.get('showModalEvent');
}

//Template.volprofile.temp = function () {
//	console.log("Main yahan hoon in studentdetails" + Session.get('session_id'));
//	var ref = SessionList.find({
//		_id: "551cae3cb1ddc9927db19e89"
//	});
//	console.log(window.$log2 = ref);
//	return (ref.fetch());
//}
//
//Handlebars.registerHelper('json', function (obj) {
//	return JSON.stringify(obj);
//});

//Template.sessiontable.temp = function () {
//	console.log("Main yahan hoon in sessiontable" + Session.get('session_id'));
//	var ref = SessionList.find({
//		_id: "551cae3cb1ddc9927db19e89"
//	});
//	console.log(window.$log5 = ref);
//	return (ref.fetch());
//}

//Template.showModal.evt = function () {
//	console.log("Main yahan hoon in show modal" + Session.get('session_id'));
//	var ref = SessionList.find({
//		_id: "551cae3cb1ddc9927db19e89"
//	});
//	console.log(window.$log3 = ref);
//	return ref;
//}

//Template.showModal.temp = function () {
//	//	console.log("Main yahan hoon in show modal" + Session.get('session_id'));
//	var ref = SessionList.findOne({
//		_id: "551cae3cb1ddc9927db19e89"
//	});
//	//	console.log($log2 = ref);
//	return (ref);
//}

//Template.showModal.helpers({
//	temp: function () {
//		console.log("in helper!");
//		var ref = SessionList.findOne({
//			_id: "551cae3cb1ddc9927db19e89"
//		});
//		console.log(ref);
//		return (ref);
//	}
//})

Template.showModal.helpers({
	temp: function () {
		//		var ref = {
		//				name: "Chunks",
		//				class: "myClass anotherClass",
		//				value: 123
		//			}
		var ref = SessionList.find({
			_id: "551cae3cb1ddc9927db19e89"
		}).fetch()[0];
		console.log(ref);
		return ref;
	}
});

Template.showModal.events({
	'click .save': function (temp, tmpl) {
		console.log("inside showmodal event");
		console.log(temp);
	}
})

//Template.showModal.evt = function () {
//	// run a query to the database
//	// console.log(modalEvent);
//	var modalEvent = SessionList.findOne({
//		_id: Session.get('volunteer_id')
//	});
//	console.log(modalEvent);
//	return modalEvent;
//}

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

// The helpers code allows the records in the table to filtered according to the user signed in
Template.sessiontable.helpers({
	selector: function () {
		//		console.log('inside the selector table');
		//		console.log(Meteor.userId());
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