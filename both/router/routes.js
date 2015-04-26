Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
});

Router.route('/items/new', {
  name: 'items.new'
});

Router.route('/projects/new', {
  name: 'projects.new'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
