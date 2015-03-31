//Router.route('/', {name: 'home'});
//Router.route('/about', {name: 'about'});
//Router.route('/contact', {name: 'contact'});
//Router.route('/dashboard', {name: 'dashboard'});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('about', {path: '/about'});
  this.route('contact', {path: '/contact'});
  this.route('vol_signup', {path: '/vol_signup'});
  this.route('dashboard', {path: '/dashboard'});
});