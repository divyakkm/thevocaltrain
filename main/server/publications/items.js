Meteor.publishComposite("items", function () {
	return {
		find: function () {
				return Items.find({});
			}
			// ,
			// children: [
			//   {
			//     find: function(item) {
			//       return [];
			//     }
			//   }
			// ]
	}
});

Meteor.publishComposite("calevents", function () {
	return {
		find: function () {
				return CalEvents.find({});
			}
			// ,
			// children: [
			//   {
			//     find: function(item) {
			//       return [];
			//     }
			//   }
			// ]
	}
});

Meteor.publishComposite("StudentVolunteer", function () {
	return {
		find: function () {
				return StudentVolunteer.find({});
			}
			// ,
			// children: [
			//   {
			//     find: function(item) {
			//       return [];
			//     }
			//   }
			// ]
	}
});

Meteor.publishComposite("session", function () {
	return {
		find: function () {
				return session.find({});
			}
			// ,
			// children: [
			//   {
			//     find: function(item) {
			//       return [];
			//     }
			//   }
			// ]
	}
});

Meteor.publishComposite("lesson", function () {
	return {
		find: function () {
				return LessonBlock.find({});
			}
			// ,
			// children: [
			//   {
			//     find: function(item) {
			//       return [];
			//     }
			//   }
			// ]
	}
});

Meteor.publishComposite("assessment", function () {
	return {
		find: function () {
				return Assessment.find({});
			}
			// ,
			// children: [
			//   {
			//     find: function(item) {
			//       return [];
			//     }
			//   }
			// ]
	}
});

Meteor.publishComposite("activity", function () {
	return {
		find: function () {
				return Activity.find({});
			}
			// ,
			// children: [
			//   {
			//     find: function(item) {
			//       return [];
			//     }
			//   }
			// ]
	}
});
Meteor.publishComposite("student_volunteer", function () {
	return {
		find: function () {
				return StudentVolunteer.find({});
			}
			// ,
			// children: [
			//   {
			//     find: function(item) {
			//       return [];
			//     }
			//   }
			// ]
	}
});