Mations = new Mongo.Collection("mations");

if (Meteor.isClient) {

  Template.body.helpers({
    mations: function() {
      return Mations.find({});
    }
  });
}

if (Meteor.isServer) {

}
