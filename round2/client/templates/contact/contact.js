Template.contact.rendered = function() {

};

AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});

ContactController = AppController.extend({
  layoutTemplate: 'appLayout'
});