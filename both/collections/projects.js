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
    max: 200
  },
  client: {
    type: String,
    max: 50
  },
  category: {
    type: String,
    max: 50
  },
  tags: {
    type: String,
    max: 50
  },
  company: {
    type: String,
    max: 50
  }
}));
