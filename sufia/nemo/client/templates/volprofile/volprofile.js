Meteor.subscribe('student');

// Set session defaults
Session.setDefault('get_SessionRow', null);
Session.setDefault('showModalEvent', false);
Session.setDefault('volunteer_id', Meteor.userId());
Session.setDefault('session_id', null);
Session.setDefault('test', null);

var test = null;

//Modal code 

Template.sessiontable.showModalEvent = function () {
	return Session.get('showModalEvent');
}

// Template.showModal.evt = function () {
// 	// run a query to the database
// 	var modalEvent = session.findOne({
// 		_id: Session.get('volunteer_id')
// 	});
// 	console.log(modalEvent);
// 	return modalEvent;
// }

//Each click on a row is associated to a unique session
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
	

// Template.carousel.evt = function () {
//   // run a query to the database
//   var student_details = Student.find({
//     volunteer_id: Session.get('volunteer_id')
//   });
//   return student_details;
// }


Template.carousel.events({

  // 'click #student1': function () {
  //   console.log("clicked image number1")},

  'click #student1': function (volunteer_id) {
    // Create an empty array to store the events
    var student_details = [];
    // Variable to pass events to the calendar
    // Gets us all of the calendar events and puts them in the array
    //                        calEvents = CalEvents.find({assigned:null});
    StudentVolunteerDetails = StudentVolunteer.find({volunteer_id: Meteor.userId()}).fetch();
    console.log(StudentVolunteerDetails);
    // Do a for each loop and add what you find to events array
    StudentVolunteerDetails.forEach(function (evt) {
      student_details.push({
        student_id: evt.student_id
      });
    }); 
    
    test = student_details[0].student_id;
    console.log('test');
    console.log(test);
    console.log(student_details[0].student_id);
    // CalEvents.find({student_id:});
    return test;
  }
  })


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
  })


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