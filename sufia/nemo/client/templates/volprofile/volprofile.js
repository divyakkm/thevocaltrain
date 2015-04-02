// SessionList = new Mongo.Collection('session');

// TabularTables = {};
// TabularTables.Books = new Tabular.Table({
// 	name: "Session List",
// 	collection: SessionList,
// 	columns: [
// 		{data: "date", title: "Date"},
// 		{data: "time", title: "Time"},
// 		{data: "assigned_student", title: "Student"},
// 		{data: "session", title: "Session"}
// 	]
// });

 Template.sessiontable.helpers({
  selector: function() {
  	console.log('inside the selector table');
  	console.log(Meteor.userId());
    return {volunteer_id: Meteor.userId()}
    }
  });


  Template.sessiontable.events({
  'click tr': function (event) {
    Modal.show('exampleModal');
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