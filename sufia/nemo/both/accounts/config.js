AccountsTemplates.configureRoute('signIn', {
	layoutTemplate: 'appLayout'
});
AccountsTemplates.configureRoute('signUp', {
	layoutTemplate: 'appLayout'
});
AccountsTemplates.configureRoute('ensureSignedIn', {
	layoutTemplate: 'appLayout'
});

AccountsTemplates.configure({
    showForgotPasswordLink: true,
    showPlaceholders: false
});

<<<<<<< Updated upstream
// AccountsTemplates.addFields([
// 	{
// 		_id: 'phone',
// 		type: 'tel',
// 		displayName: "Landline Number",
//     }])
=======
AccountsTemplates.addFields([
	// need to work to validate records 
	{_id: 'status', //not working for now -- hidden value doesn't set with the default values 
    type: 'hidden',
    value: 'Pending'
	}, 

	{ _id: 'createdAt', //not working for now -- hidden value doesn't set with the default values 
    type: 'hidden',
    value: new Date()
	},

	{ _id: 'name',
    type: 'text',
    displayName: 'Name',
    required: true,
    
	},

	// add gender radio button 

	{ _id: 'dob_year',
    type: 'tel',
    displayName: 'Year of Birth',
    required: true
	},

	{ _id: 'mobile',
  type: 'tel',
  displayName: 'Mobile Phone Number',
  required: true
	},

	{ _id: 'hometown',
  type: 'text',
  displayName: 'Hometown - where did you grow up?',
  required: true
	},

	{ _id: 'current_city',
  type: 'text',
  displayName: 'Current City you live in',
  required: true
	},

		{ _id: 'mobile',
  type: 'tel',
  displayName: 'Mobile Phone Number',
  required: true
	},

])

>>>>>>> Stashed changes
