Package.describe({
	name: 'flyover-tinytests',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('WINDOWS-PREVIEW@0.3.0');
	//	api.addFiles('flyover-tinytests-tests.js');
	//api.addFiles('flyover-tinytests.js');
	//	api.add_files('..\\..\\client\\templates\\volprofile\\volprofile.js');
	//	api.add_files('..\\..\\client\\templates\\volprofile\\volprofile.html');
	api.addFiles('volprofile.js');
	api.addFiles('volprofile.html');
	console.log("Package OnUse...");
});

Package.onTest(function (api) {
	api.use('tinytest');
	api.use(["spacebars", "tinytest", "test-helpers", "jquery"]);
	api.use("templating", "client");
	//	api.addFiles('flyover-tinytests-tests.js');
	// reference the application files you want to test
	api.addFiles('tests/volprofile.js', 'client');
	// add stubs
	//	api.add_files('test-stubs.js', 'client');

});