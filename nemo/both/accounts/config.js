AccountsTemplates.configureRoute('signIn', {
	layoutTemplate: 'appLayout',
	redirect: '/volprofile'
});

AccountsTemplates.configureRoute('signUp', {
	layoutTemplate: 'appLayout',
	redirect: '/schedulenew' //change to new volprofile after signup
});
AccountsTemplates.configureRoute('ensureSignedIn', {
	layoutTemplate: 'appLayout'
});



//////Code for Sign Up Volunteer Registration page -- custom fields were added to the SignUp page 
AccountsTemplates.configure({
	showForgotPasswordLink: true,
	showPlaceholders: true,
	showLabels: true
});


AccountsTemplates.addFields([
	{
		_id: 'status', //not working for now -- hidden value doesn't set with the default values 
		type: 'hidden',
		value: 'Pending',
		visible: false
	},

	{
		_id: 'createdAt', //not working for now -- hidden value doesn't set with the default values 
		type: 'hidden',
		value: new Date(),
		visible: false
	},

	{
		_id: 'name',
		type: 'text',
		displayName: 'Name',
		placeholder: 'Please enter your name',
		required: true
	},

	{
		_id: "gender",
		type: "radio",
		displayName: "Gender (This helps match students to you -- children are more comfortable speaking to the same gender)",
		required: true,
		select: [
			{
				text: "Male",
				value: "male"
			},
			{
				text: "Female",
				value: "female"
			}],
	},

	{
		_id: 'dob_year',
		type: 'tel',
		displayName: 'Year of Birth',
		placeholder: 'Please enter your year of birth - volunteers must be over 18 to teach',
		required: true
	},

	{
		_id: 'mobile',
		type: 'tel',
		displayName: 'Mobile Phone Number',
		placeholder: 'Please enter your number so our system can call you when you have to teach',
		required: true
	},

	{
		_id: 'hometown',
		type: 'text',
		displayName: 'Hometown',
		placeholder: 'Please enter your hometown - this helps when matching students to you',
		required: true
	},

	{
		_id: 'current_city',
		type: 'text',
		displayName: 'Current City',
		placeholder: 'Please enter your current city - this helps know where our volunteers are coming from!',
		required: true
	},

	{ //current timezone 
		//{{> timezonePicker class="form-control" selected=timezone}}
		_id: "current_timezone",
		type: "select",
		displayName: "Current TimeZone",
		select: [
			{
				text: "Select an Option",
				value: "select"
    		},
			{
				text: "Indian Standard Time (IST)",
				value: "IST",
        },
			{
				text: "Pacific Standard Time (PST)",
				value: "PST",
        },
      {
				text: "Mountain Time (MT)",
				value: "MT",
        },
      {
				text: "Central Standard Time (CST)",
				value: "CST",
        },
      {
				text: "Eastern Standard Time (EST)",
				value: "EST",
        },
    ],
		required: true
	},

	{
		_id: "education",
		type: "select",
		displayName: "Highest Degree Received",
		select: [
			{
				text: "Select an Option",
				value: "select"
    		},
			{
				text: "Bachelors",
				value: "bachelors",
        },
			{
				text: "Masters",
				value: "masters",
        },
        {
				text: "PhD",
				value: "phd",
        },
        {
				text: "Other",
				value: "other",
        }
    ],

	},

	{
		_id: 'language1',
		type: 'text',
		displayName: 'Besides English - what regional language do you speak?',
		placeholder: 'This helps us match volunteers and students who speak the same local language',
		required: true
	},

	{
		_id: "language1_prof",
		type: "select",
		displayName: "Level of Proficiency",
		required: true,

		select: [
			{
				text: "Select an Option",
				value: "select"
			},
			{
				text: "Minimum Professional Proficiency: Able to speak the language with sufficient structural accuracy and vocabulary to participate effectively in most formal and informal conversations.",
				value: "level1"
			},
			{
				text: " Full Professional Proficiency: Able to use the language fluently and accurately on all levels pertinent to professional needs.",
				value: "level2"
			},
			{
				text: "Native Speaker: Equivalent to that of an educated native speaker.",
				value: "level3"
			}
    ],
	},


	{
		_id: 'language2',
		type: 'text',
		displayName: 'Any other regional language  you speak?',
		placeholder: 'This helps us match volunteers and students who speak the same local language',
		required: false
	},

	{
		_id: "language2_prof",
		type: "select",
		displayName: "Level of Proficiency",
		select: [
			{
				text: "Select an Option",
				value: "select"
			},
			{
				text: "Minimum Professional Proficiency: Able to speak the language with sufficient structural accuracy and vocabulary to participate.",
				value: "level1"
			},
			{
				text: " Full Professional Proficiency: Able to use the language fluently and accurately on all levels pertinent to professional needs.",
				value: "level2"
			},
			{
				text: "Native Speaker: Equivalent to that of an educated native speaker.",
				value: "level3"
			}
    ],
	}
]);


