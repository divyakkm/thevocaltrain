////////////////////////////// Set Session Defaults  //////////////////////////////////////////

Meteor.subscribe("lesson");
Meteor.subscribe("assessment");
Meteor.subscribe("session");
Meteor.subscribe("activity");

Session.setDefault('get_SessionRow', null);
Session.setDefault('showModalEvent', false);
Session.setDefault('volunteer_id', Meteor.userId());
Session.setDefault('student_id', null);
Session.setDefault('session_id', null);

Session.setDefault('showStudentModal', 0);


////////////////////////////// Modal code - Session In Progress ///////////////////////////////////////////////////


Template.sessiontable.showModalEvent = function () {
	return Session.get('showModalEvent');
}

Template.showModal.helpers({
	temp: function () {
		//		
		console.log("inside temp");
		console.log("mera session id "+Session.get('session_id'));
		var ref = CalEvents.find({
			title: SessionList.find({
				_id: Session.get('session_id')
			}).fetch()[0].assigned_student
		}).fetch()[0];
				console.log(ref);
		return ref;
	},

	lsn: function () {
		console.log("inside lsn");
		var ref1 = LessonBlock.find({
			_id: SessionList.find({
				_id: Session.get('session_id')
			}).fetch()[0].lesson_id
		}).fetch()[0];
		// var ref1 = {
		// 		name: "Chunks",
		// 		class: "myClass anotherClass",
		// 		value: 123
		// 	}
		console.log("ref1 value"+ref1);
		return ref1;
	},

	act: function () {
		console.log("inside act");
		var ref2 = Activity.find({
			lesson_id: SessionList.find({
				_id: Session.get('session_id')
			}).fetch()[0].lesson_id
		});
		console.log("ref2 value"+ref2);
		return ref2;
	},

	ass: function () {
		console.log("inside ass");
		var ref3 = Assessment.find({
			lesson_id: SessionList.find({
				_id: Session.get('session_id')
			}).fetch()[0].lesson_id
		});
		console.log("ref3 value"+ref3);
		return ref3;
	},

	ass2: function () {
		console.log("inside ass2");
		var ref4 = Assessment.find({
			lesson_id: SessionList.find({
				_id: Session.get('session_id')
			}).fetch()[0].lesson_id
		}).fetch()[0];
		//Assessment.find({lesson_id : SessionList.find({_id: "551cae3cb1ddc9927db19e89"}).fetch()[0].lesson_id}).fetch()[0]
		//});
		console.log("ref4 value"+ref4);
		return ref4;
	},

	dt: function () {
		console.log("inside dt");
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
		console.log("reff value"+reff);
		return reff;
	}
});

Template.showModal.events({
	'click .save': function (evt, tmpl) {
			console.log("step1");
			console.log(tmpl);
			comments = tmpl.find('#commentstextarea').value;
			notes = tmpl.find('#currentnotes').value;
			//score = tmpl.find('#score').value;
			// eng = tmpl.find('input:radio[name=Engagement]:checked').value;
			// ret = tmpl.find('input:radio[name=Retention]:checked').value;
			// acc = tmpl.find('input:radio[name=Accuracy]:checked').value;
			// flu = tmpl.find('input:radio[name=Fluency]:checked').value;
			// cre = tmpl.find('input:radio[name=Creativity]:checked').value;
			//console.log(eng);
			updateSessionList(Session.get('session_id'), comments, notes);
			document.getElementById('commentstextarea').value='';
			document.getElementById('currentnotes').value='';
		}
		//SessionList.update({_id: "551cae3cb1ddc9927db19e89"}, {$set: {notes: "5"}});
		//console.log("step 2");
})

var updateSessionList = function (id, comments, notes) {
	console.log("inside updatesessionlist");
	SessionList.update({
		_id: id
	}, {
		$set: {
			submittedAt: new Date(),
			comments: comments,
			notes: notes
			//mainscore: score,
			// engagement: eng,
			// retention: ret,
			// creativity: cre,
			// accuracy: acc,
			// fluency: flu
		}
	});
	console.log("done updatesessionlist");
}

//////////////////////////////Session Table code - Sufi////////////////////////////////////////////

//Each click on a row is associated to a unique session

Template.sessiontable.events({

	'click tbody > tr': function (event, view) {

		var dataTable = $(event.target).closest('table').DataTable();
		// console.log(dataTable);
		// console.log(window.$log=dataTable);
		var rowData = dataTable.row(event.currentTarget).data();
		// console.log(rowData);
		Session.set('session_id', rowData._id);
		console.log(window.$log1 = rowData);
		console.log("yahan ka session id "+Session.get('session_id'));
		// console.log('clicked row');
		// // console.log(modalEvent);
		// Session.set('get_SessionRow', modalEvent.id);
		Session.set('showModalEvent', true);		
		$('#showModalid').modal("show");
		$('.modal-backdrop').remove();

	}
});


// The helpers code allows the records in the table to filtered according to the user signed in
Template.sessiontable.helpers({
	selector: function () {
		// console.log('inside the selector table');
		// console.log(Meteor.userId());
		return {
			volunteer_id: Meteor.userId()
		}
	},
  status: function () {
    return {status: 'Completed'};
  }
});


Template.sessiontable.events({
  'mouseover .odd': function(e) {
    console.log(this.name);
    $('.odd').removeClass('highlight');
    $('.even').removeClass('highlight');
    $(e.currentTarget).addClass('highlight');
  },

    'mouseover .even': function(e) {
    console.log(this.name);
    $('.even').removeClass('highlight');
    $('.odd').removeClass('highlight');
    $(e.currentTarget).addClass('highlight');
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
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
		dots: true,
		centerMode: true,
		centerPadding: '20%'
	});
}


// Template.carousel.events({

//   'click #student1': function () {
//   	console.log("clicked image number1");
//     Session.set('showStudentModal', 0);
//     Session.set('showStudentModal', 1);
//     $('#studentModalid').modal("show");
//     $('.modal-backdrop').remove();
//   },
//   'click #student2': function () {
//   	console.log("clicked image number2");
//     Session.set('showStudentModal', 0);
//     Session.set('showStudentModal', 2);
//     $('#studentModalid').modal("show");
//     $('.modal-backdrop').remove();
//   },
// 	'click #student3': function () {
// 	console.log("clicked image number3");
//   Session.set('showStudentModal', 0);	
// 	Session.set('showStudentModal', 3);
// 	$('#studentModalid').modal("show");
// 	$('.modal-backdrop').remove();
//   }
// });

// ////////////////////////////// Show Student Modal ////////////////////////////////////////////

/*Template.showStudentModal.helpers ({

  studentlist: function () {
     //Create an array to store all the student ids associated with this volunteer 
     var studentIdList = [];
     
     //Query the StudentVolunteer table to get all student ids 
     StudentVolunteerDetails = StudentVolunteer.find({volunteer_id: Meteor.userId()}).fetch();
     
     //Push into array 
     StudentVolunteerDetails.forEach(function (evt) {
      studentIdList.push({
        student_id: evt.student_id});
      }); 

    if (Session.get('showStudentModal') == 1) {

    //Testing - need to change 
     var studentid = studentIdList[0].student_id;
     console.log(studentid);
     // return test

     var studentDetails = CalEvents.find({
      _id: studentid
      }).fetch()[0];

     var notes = SessionList.find({assigned_student_id: studentid},{sort: {submittedAt: -1}
   							}).fetch()[0].notes;
     console.log('notes');
     console.log(notes);

    console.log(studentDetails);
   	return studentDetails;
    } 

    else if (Session.get('showStudentModal') == 2) {

    //Testing - need to change 
     var studentid = studentIdList[1].student_id;
     console.log('inside student 2 if');
     console.log(studentid);
     // return test

      var studentDetails = CalEvents.find({
      _id: studentid
      }).fetch()[0];

    console.log(studentDetails);
   	return studentDetails;
   }

    else if (Session.get('showStudentModal') == 3) {

    //Testing - need to change 
     var studentid = studentIdList[2].student_id;
     console.log(studentid);
     // return test

      var studentDetails = CalEvents.find({
      _id: studentid
      }).fetch()[0];

    console.log(studentDetails);
   	return studentDetails;
   };
	},

	columnDemo: function () {
		return builtColumn();
	}

  })*/
////////////////////////////// Dynamic Rendering with Divs ////////////////////////////////////////////

Template.carousel.events({

	'click .student_div': function () {
		var student_id = event.target.id;
		Session.set('student_id', student_id);
		$('#studentModalid').modal("show");
		$('.modal-backdrop').remove();
		// Testing statements
		// var test = event.currentTarget;
		// console.log('test');
		// console.log(test);
		// var test2 = event.target.id;
		// console.log('test2');
		// console.log(test2);
	}
})

Template.studentPanel.helpers({

	studentlist: function () {

		StudentDetails = CalEvents.find({student_id: StudentVolunteer.
									find({volunteer_id: Meteor.userId()}).fetch().volunteer_id}).fetch()
		console.log(StudentDetails);
		return StudentDetails;
	}
});

Template.carousel.helpers({

	studentlist: function () {
		//Create an array to store all the student ids associated with this volunteer 
		var studentIdList = [];

		//Query the StudentVolunteer table to get all student ids 
		StudentVolunteerDetails = StudentVolunteer.find({
			volunteer_id: Meteor.userId()
		}).fetch();
		
		console.log(StudentDetails);
		return StudentDetails;
	},
});

Template.studentPanel.events({

	'click .panel-footer': function () {
		var student_id = event.target.id;
		Session.set('student_id', student_id);
		$('#studentModalid').modal("show");
		$('.modal-backdrop').remove();
		//Testing statements
		var test = event.currentTarget;
		console.log('test');
		console.log(test);
		var test2 = event.target.id;
		console.log('test2');
		console.log(test2);
	}
})


Template.showStudentModal.helpers({
	studentdetails: function () {

	var studentid = Session.get('student_id');
     console.log(studentid);

     var studentDetails = CalEvents.find({
      _id: studentid
      }).fetch()[0];

    console.log(studentDetails);
   	return studentDetails;
	},

	allnotes: function () {
	var studentid = Session.get('student_id');
    console.log(studentid);

  	var notes = SessionList.find({assigned_student_id: studentid}).fetch();
     console.log('notes');
     console.log(notes);
  	
  	return notes;
	},

	columnDemo: function () {
		return builtColumn();
	}
});

////////////////////////////// Chart within Student Modal ////////////////////////////////////////////

function builtColumn() {

    return {
        chart: {type: 'column'},
        
        title: {
            text: 'Progress Summary'
        },
        
        xAxis: {
        	type: 'category'        
        },
        
		yAxis: {
            title: {text: 'Score'}
        },	
        
        // tooltip: {
        //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        //         '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        //     footerFormat: '</table>',
        //     shared: true,
        //     useHTML: true
        // },
        
    plotOptions: {
        series: {
            point: {
                events: {
                    mouseOver: function () {
                        var chart = this.series.chart;
                        if (!chart.lbl) {
                            chart.div = chart.renderer.label('')
                                .attr({
                                    padding: 10,
                                    r: 10,
                                    fill: Highcharts.getOptions().colors[1]
                                })
                                .css({
                                    color: '#FFFFFF'
                                })
                                .add();
                        }
                        chart.div
                            .show()
                            .attr({ 
                                text: 'x: ' + this.x + ', y: ' + this.y 
                            });
                    }
                }
            },
            events: {
                mouseOut: function () {
                    if (this.chart.div) {
                        this.chart.div.hide();
                    }
                }
            }
        }
    },

    tooltip: {
        enabled: false
    },



        series: [{
        	name: "Lessons Completed",
            data: [
                ['Lesson 0 (live)', 3],
                ['Lesson 1 (live)', 2],
                ['Lesson 1 (recorded)', 3],
                ['Lesson 2 (live)', 3],
                ['Lesson 2 (recorded)', 4]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.0f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    	}
	}

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