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