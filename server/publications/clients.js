Meteor.publish('projectNew', function() {
  //Meteor._sleepForMs(2000);
  return [
            Categories.find(),
            Clients.find(),
            Tags.find()
          ];
});
