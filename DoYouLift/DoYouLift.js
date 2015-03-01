Equipment = new Mongo.Collection("equipment");
 Equipment.insert({
        id:0,
        name: 'Bench',
        occupied : true
});
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
        getequipment: function(){
            return Equipment.find({});
        }
    });

  Template.item.helpers({
    occupied: function(){
      return this.occupied;
    }
  });


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
   

  });
}
}