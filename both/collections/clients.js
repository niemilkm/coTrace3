Clients = new Mongo.Collection('clients');

Clients.helpers({
  company: function()
  {
    return Companies.findOne(this.companyId);
  }

});

Clients.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Clients.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 200
  },
  company: {
    type: String,
    max: 50
  }
}));
