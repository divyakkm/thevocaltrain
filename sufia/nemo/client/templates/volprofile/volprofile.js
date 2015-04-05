
Meteor.subscribe("StudentVolunteer");
Meteor.subscribe("calevents");


////////////////////////////// Set Session Defaults  //////////////////////////////////////////

Session.setDefault('get_SessionRow', null);
Session.setDefault('showModalEvent', false);
Session.setDefault('showStudentModal', false);
Session.setDefault('volunteer_id', Meteor.userId());
Session.setDefault('student_id', null);


////////////////////////////// Modal code ///////////////////////////////////////////////////

Template.sessiontable.showModalEvent = function () {
	return Session.get('showModalEvent');
}

//////////////////////////////Session Table code ////////////////////////////////////////////

//Each click on a row is associated to a unique session
Template.sessiontable.events ({

  'click tbody > tr': function (event, view) {

  	var dataTable = $(event.target).closest('table').DataTable();
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
    // console.log('inside the selector table');
    // console.log(Meteor.userId());
    return {volunteer_id: Meteor.userId()}
    }
  });


////////////////////////////// Carousel code ////////////////////////////////////////////


// Template.carousel.evt = function () {
//   // run a query to the database
//   var student_details = Student.find({
//     volunteer_id: Session.get('volunteer_id')
//   });
//   return student_details;
// }

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

Template.showStudentModal.helpers ({
  studentlist: function () {
     console.log('inside student modal helper');
     
     //Create an array to store all the student ids associated with this volunteer 
     var studentIdList = [];
     
     //Query the StudentVolunteer table to get all student ids 
     StudentVolunteerDetails = StudentVolunteer.find({volunteer_id: Meteor.userId()}).fetch();
     
     //Push into array 
     StudentVolunteerDetails.forEach(function (evt) {
      studentIdList.push({
        student_id: evt.student_id});
      }); 

     //Testing - need to change 
     var test = studentIdList[0].student_id;
     console.log(test);
     // return test

     var studentDetails = CalEvents.find({
      _id: test
      }).fetch()[0];

     console.log('student name');
     console.log(studentDetails);
     return studentDetails 
    } 
  })


    // var ref = CalEvents.find({
    //   title: SessionList.find({
    //     _id: "551cae3cb1ddc9927db19e89"
    //   }).fetch()[0].assigned_student
    // }).fetch()[0];
    // console.log(ref);
    // return ref;



Template.carousel.events({

  // 'click #student1': function () {
  //   console.log("clicked image number1")},

  'click #student1': function () {
    Session.set('showStudentModal', true);
    $('#studentModalid').modal("show");
  }
  })



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