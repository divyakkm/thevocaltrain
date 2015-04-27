AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});

VolSignUpController = AppController.extend({
  layoutTemplate: 'appLayout'
});
