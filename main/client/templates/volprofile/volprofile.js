////////////////////////////// Set Session Defaults  //////////////////////////////////////////

Meteor.subscribe("lesson");
Meteor.subscribe("assessment");
Meteor.subscribe("session");
Meteor.subscribe("activity");

Session.setDefault('get_SessionRow', null);
Session.setDefault('showModalEvent', false);
Session.setDefault('showStudentModal', false);
Session.setDefault('volunteer_id', Meteor.userId());
Session.setDefault('student_id', null);
Session.setDefault('session_id', "551cae3cb1ddc9927db19e89");

////////////////////////////// Modal code - Session In Progress ///////////////////////////////////////////////////


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
		//		console.log("inside lsn");
		var ref1 = LessonBlock.find({
			_id: SessionList.find({
				_id: "551cae3cb1ddc9927db19e89"
			}).fetch()[0].lesson_id
		}).fetch()[0];
		// var ref1 = {
		// 		name: "Chunks",
		// 		class: "myClass anotherClass",
		// 		value: 123
		// 	}
		//		console.log(ref1);
		return ref1;
	},

	act: function () {
		//		console.log("inside act");
		var ref2 = Activity.find({
			lesson_id: SessionList.find({
				_id: "551cae3cb1ddc9927db19e89"
			}).fetch()[0].lesson_id
		});
		//		console.log(ref2);
		return ref2;
	},

	ass: function () {
		//		console.log("inside act");
		var ref3 = Assessment.find({
			lesson_id: SessionList.find({
				_id: "551cae3cb1ddc9927db19e89"
			}).fetch()[0].lesson_id
		});
		//		console.log(ref2);
		return ref3;
	},

	ass2: function () {
		console.log("inside ass2");
		var ref4 = Assessment.find({
			lesson_id: SessionList.find({
				_id: "551cae3cb1ddc9927db19e89"
			}).fetch()[0].lesson_id
		}).fetch()[0];
		//Assessment.find({lesson_id : SessionList.find({_id: "551cae3cb1ddc9927db19e89"}).fetch()[0].lesson_id}).fetch()[0]
		//});
		console.log(ref4);
		return ref4;
	},

	dt: function () {
		//console.log("inside dt");
		// var content = $('#currentnotes').value;
		// console.log(content);
		//		 var ref1 = {
		//		 	name: "Chunks",
		//		 	class: "myClass anotherClass",
		//		 	value: 123
		//		 } DrawingHistory.find({}, {sort: {time: -1}});
		var reff = SessionList.find({}, {
			sort: {
				submittedAt: -1
			}
		}).fetch()[0];
		//console.log(reff);
		return reff;
	}
});

Template.showModal.events({
	'click .save': function (evt, tmpl) {
			console.log("step1");
			console.log(tmpl);
			comments = tmpl.find('#commentstextarea').value;
			notes = tmpl.find('#currentnotes').value;
			score = tmpl.find('#score').value;
			eng = tmpl.find('input:radio[name=Engagement]:checked').value;
			ret = tmpl.find('input:radio[name=Retention]:checked').value;
			acc = tmpl.find('input:radio[name=Accuracy]:checked').value;
			flu = tmpl.find('input:radio[name=Fluency]:checked').value;
			cre = tmpl.find('input:radio[name=Creativity]:checked').value;
			console.log(eng);
			updateSessionList("551cae3cb1ddc9927db19e89", comments, notes, score, eng, ret, acc, flu, cre);
		}
		//SessionList.update({_id: "551cae3cb1ddc9927db19e89"}, {$set: {notes: "5"}});
		//console.log("step 2");
})

var updateSessionList = function (id, comments, notes, score, eng, ret, acc, flu, cre) {
	console.log("inside updatesessionlist");
	SessionList.update({
		_id: id
	}, {
		$set: {
			submittedAt: new Date(),
			comments: comments,
			notes: notes,
			mainscore: score,
			engagement: eng,
			retention: ret,
			creativity: cre,
			accuracy: acc,
			fluency: flu
		}
	});
	console.log("done updatesessionlist");
}

//////////////////////////////Session Table code - Sufi////////////////////////////////////////////

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

////////////////////////////// Old session table code ////////////////////////////////////////////

// Template.sessiontable.events({
// 	'click tbody > tr': function (event, view) {
// 		var dataTable = $(event.target).closest('table').DataTable();
// 		var rowData = dataTable.row(event.currentTarget).data();
// 		Session.set('session_id', rowData._id._str);
// 		//		console.log(window.$log1 = rowData);
// 		Session.set('showModalEvent', true);
// 		$('#showModalid').modal("show");
// 	}
// })

// // The helpers code allows the records in the table to filtered according to the user signed in
// Template.sessiontable.helpers({
// 	selector: function () {
// 		//		console.log('inside the selector table');
// 		//		console.log(Meteor.userId());
// 		return {
// 			volunteer_id: Meteor.userId()
// 		}
// 	}
// });


////////////////////////////// Carousel code ////////////////////////////////////////////

Template.carousel.rendered = function () {

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

Template.carousel.events({
  'click #student1': function () {
  	console.log("clicked image number1");
    Session.set('showStudentModal', true);
    $('#studentModalid').modal("show");
  }
  });

////////////////////////////// Show Student Modal ////////////////////////////////////////////

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
     var studentid = studentIdList[0].student_id;
     console.log(studentid);
     // return test

      var studentDetails = CalEvents.find({
      _id: studentid
      }).fetch()[0];

     console.log(studentDetails);
     return studentDetails 
    } 
  })


////////////////////////////// Common ////////////////////////////////////////////

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