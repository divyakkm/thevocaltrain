// Set session defaults
Session.setDefault('get_SessionRow', null);
Session.setDefault('showModalEvent', false);
Session.setDefault('volunteer_id', Meteor.userId());
Session.setDefault('session_id', null);


Template.sessiontable.showModalEvent = function () {
	return Session.get('showModalEvent');
}

Template.showModal.evt = function () {
	// run a query to the database
	var modalEvent = session.findOne({
		_id: Session.get('volunteer_id')
	});
	console.log(modalEvent);
	return modalEvent;
}

Template.sessiontable.events ({

  'click tbody > tr': function (event, view) {

  	var dataTable = $(event.target).closest('table').DataTable();
  	// console.log('trying to find closest')
  	// console.log(dataTable);
  	// console.log(window.$log=dataTable);
    var rowData = dataTable.row(event.currentTarget).data();
    // console.log(rowData);
    Session.set('session_id',rowData._id._str);
  	console.log(window.$log1=rowData);
  	// console.log('clicked row');
  	// // console.log(modalEvent);
  	// Session.set('get_SessionRow', modalEvent.id);
  	Session.set('showModalEvent', true);
  	$('#showModalid').modal("show");
    }
  });
	


// The helpers code allows the records in the table to filtered according to the user signed in
 Template.sessiontable.helpers({
  selector: function() {
  	console.log('inside the selector table');
  	console.log(Meteor.userId());
    return {volunteer_id: Meteor.userId()}
    }
  });


// Template.sessiontable.rendered = function () {
// 	console.log('sessiontable rendered before');
// 	console.log('sessiontable rendered');

// };

Template.carousel.rendered = function() {

$('#carousel').slick({
  dots: true,
  arrows: true
});

// $('#carousel').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });
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