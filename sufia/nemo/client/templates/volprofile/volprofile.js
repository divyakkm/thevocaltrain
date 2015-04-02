// Set session defaults
Session.setDefault('get_SessionRow', null);
Session.setDefault('showModalEvent', false);

// The helpers code allows the records in the table to filtered according to the user signed in
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