Template.projectsNew.created = function() {
  // 1. Initialization

  var instance = this;

  // initialize the reactive variables
  //instance.loaded = new ReactiveVar(0);
  //instance.limit = new ReactiveVar(15);
  //instance.ready = new ReactiveVar(false);

  // 2. Autorun

  // will re-run when the "limit" reactive variables changes
  instance.autorun(function () {

    // get the limit
    //var limit = instance.limit.get();

    // subscribe to the projects publication
    var subscription = instance.subscribe('projectNew');
    //instance.subscribe('projects', limit);

    // if subscription is ready, set limit to newLimit
    // if (subscription.ready()) {
    //   instance.loaded.set(limit);
    //   instance.ready.set(true);
    // } else {
    //   instance.ready.set(false);
    //}
  });

  // 3. Cursor

  // instance.clients = function() {
  //   return Clients.find();
  // }
};


Template.projectsNew.helpers({
  categoryOptions: function()
  {
    var array = [];
    var col = Categories.find().fetch();
    _.each(col, function(data) {
      array.push({label: data.name, value: data._id});
    });
    return array;
  },
  clientOptions: function()
  {
    var array = [];
    var col = Clients.find().fetch();
    _.each(col, function(data) {
      array.push({label: data.name, value: data._id});
    });
    return array;
  },
  tagOptions: function()
  {
    var array = [];
    var col = Tags.find().fetch();
    _.each(col, function(data) {
      array.push({label: data.name, value: data._id});
    });
    return array;
  },

});

Template.projectsNew.events =
{
  'click .datepicker': function() {
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
  }

}
