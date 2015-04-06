Router.map(function () {
	this.route('home', {
		path: '/'
	});
	this.route('about', {
		path: '/about'
	});
	this.route('contact', {
		path: '/contact'
	});
	this.route('vol_signup', {
		path: '/vol_signup'
	});
	this.route('dashboard', {
		path: '/dashboard'
	});
	this.route('volprofile', {
		path: '/volprofile'//,
		// data: function () {
		// 	return StudentVolunteer.find();
		// }
	});
	this.route('schedule', {
		path: '/schedule'
	});
	this.route('resources', {
		path: '/resources'
	});
	this.route('volsession', {
		path: '/volsession'
	})
});


