Projects = new Mongo.Collection('projects');

Projects.helpers({
  client: function()
  {
    return Clients.findOne(this.clientId);
  },
  category: function()
  {
    return Categories.findOne(this.categoryId);
  },
  tags: function()
  {
    return Tags.findOne(this.tagsId);
  },
  company: function()
  {
    return Companies.findOne(this.companyId);
  }

});

Projects.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Projects.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Project Name",
    max: 200
  },
  client: {
    type: String,
    max: 50,
    // autoform: {
    //   options: function() {
    //     var clients = Clients.find().fetch();
    //     console.log(clients);
    //     var array = [];
    //     _.each(clients, function(data) {
    //       array.push({label: data.name, value: data._id});
    //     });
    //     console.log(array);
    //     return array;
    //   }
    // }
  },
  category: {
    type: String,
    max: 50,
    label: ""
  },
  tags: {
    type: String,
    max: 50
  },
  company: {
    type: String,
    max: 50
  },
  dateStart: {
    type: Date,
    label: "Start Date"
  },
  dateEnd: {
    type: Date,
    label: "End Date"
  }
}));
