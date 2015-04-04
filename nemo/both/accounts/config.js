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
    showForgotPasswordLink: true
});

// AccountsTemplates.addFields([
// 	{
// 		_id: 'phone',
// 		type: 'tel',
// 		displayName: "Landline Number",
//     }])