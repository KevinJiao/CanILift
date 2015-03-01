Equipment = new Mongo.Collection("equipment");
Equipment.insert({
        id:0,
        name: 'Bench',
        occupied : false
});
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
        getequipment: function(){
            return Equipment.find({});
        }
    });

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    
    
  });
}
}