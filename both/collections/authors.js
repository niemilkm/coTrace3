Authors = new Mongo.Collection('authors');

Authors.helpers({
  company: function()
  {
    return Companies.findOne(this.companyId);
  }

});

Authors.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Authors.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 200
  },
  authorCompany: {
    type: String,
    max: 200
  },
  title: {
    type: String,
    max: 200
  },
  phone: {
    type: String,
    max: 200
  },
  email: {
    type: String,
    max: 200
  }
  company: {
    type: String,
    max: 50
  }
}));
