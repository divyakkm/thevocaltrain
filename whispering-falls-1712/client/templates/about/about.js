Template.about.rendered = function() {

};

AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});

AboutController = AppController.extend({
  layoutTemplate: 'appLayout'
});