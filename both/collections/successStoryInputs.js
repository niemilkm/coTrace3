SuccessStoryInputs = new Mongo.Collection('successStoryInputs');

SuccessStoryInputs.helpers({
  company: function()
  {
    return Companies.findOne(this.companyId);
  }

});

SuccessStoryInputs.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

SuccessStoryInputs.attachSchema(new SimpleSchema({
  company: {
    type: String,
    max: 50
  },
  SSInputs: {
    num: Number,
    index: Number,
    ques: String,
    quesMax: 200000,
    ans: String,
    ansMax: 200000
  }
}));
