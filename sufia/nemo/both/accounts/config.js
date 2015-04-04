AccountsTemplates.configureRoute('signIn', {
	layoutTemplate: 'appLayout'
});
AccountsTemplates.configureRoute('signUp', {
	layoutTemplate: 'appLayout'
});
AccountsTemplates.configureRoute('ensureSignedIn', {
	layoutTemplate: 'appLayout'
});




//Code for Sign Up Volunteer Registration page -- custom fields were added to the SignUp page 
AccountsTemplates.configure({
    showForgotPasswordLink: true,
    showPlaceholders: false
});


AccountsTemplates.addFields([
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
    required: true  
	},

	{ _id: "gender",
    type: "radio",
    displayName: "Gender",
    required: true,
    select: [
        {
        text: "Male",
        value: "male",
      }, {
        text: "Female",
        value: "female"
      }
    ],
	},

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

	{ 	//current timezone 
	//{{> timezonePicker class="form-control" selected=timezone}}
    _id: "current_timezone",
    type: "text",
    displayName: "Current TimeZone",
    required: true
	},

	{ 
    _id: "education",
    type: "select",
    displayName: "Highest Degree Received",
    select: [
        { text: "Select an Option",
    			value: "select"
    		},
        {
            text: "Bachelors",
            value: "bachelors",
        },
        {
            text: "Masters",
            value: "masters",
        }
    ],
	},

	{ _id: 'language1',
  type: 'text',
  displayName: 'Besides English - what regional language do you speak?',
  required: true
	},

	{ 
    _id: "language1_prof",
    type: "select",
    displayName: "Level of Proficiency",
    required: true,
    select: [
    		{ text: "Select an Option",
    			value: "select"
    		},
        {
            text: "High",
            value: "high",
        },
        {
            text: "Medium",
            value: "medium",
        },
        {
            text: "Low",
            value: "low",
        }
    ],
	},


	{ _id: 'language2',
  type: 'text',
  displayName: 'Any other regional language  you speak?',
  required: false
	},

	{ 
    _id: "language2_prof",
    type: "select",
    displayName: "Level of Proficiency",
    select: [
        { text: "Select an Option",
    			value: "select"
    		},
        {
            text: "High",
            value: "high",
        },
        {
            text: "Medium",
            value: "medium",
        },
        {
            text: "Low",
            value: "low",
        }
    ],
	}
]);



