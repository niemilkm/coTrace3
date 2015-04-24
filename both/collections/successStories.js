SuccessStories = new Mongo.Collection('successStories');

SuccessStories.helpers({
  project: function()
  {
    return Projects.findOne(this.projectId);
  },
  author: function()
  {
    return Categories.findOne(this.authorId);
  },
  company: function()
  {
    return Companies.findOne(this.companyId);
  }

});

SuccessStories.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

SuccessStories.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 200
  },
  project: {
    type: String,
    max: 50
  },
  author: {
    type: String,
    max: 50
  },
  company: {
    type: String,
    max: 50
  },
  SSinputs: {
    num: Number,
    index: Number,
    ques: String,
    quesMax: 200000,
    ans: String,
    ansMax: 200000
  }
}));
