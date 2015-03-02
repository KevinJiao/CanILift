Equipment = new Mongo.Collection("equipment");
//  Equipment.insert({
//         id:0,
//         name: 'Bench',
//         occupied : true
// });

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
        getequipment: function(){
            return Equipment.find({});
        }
    });

  Template.body.events({
    "click .clicky": function(){
      console.log('clicked');
        }
  });

  Template.item.helpers({
    occupied: function(){
      return this.occupied;
    }
  });

// Equipment.update({id:0}, {$set: {occupied: true}}); // Please work :(

}
if (Meteor.isServer) {
  Router.map(function () {
  this.route('update', {
    where: 'server',
    action: function () {
      var sid = this.request.query.id;
      var status = this.request.query.status==='true';
      // console.log(Equipment.find({id:sid}));
      // Equipment.update({id:id}, {$set: {occupied: status}});
      Equipment.update({id:0}, {$set: {occupied: status}});
      console.log(sid);
      console.log(status);
    },
    path:'/update'
  });
});

}