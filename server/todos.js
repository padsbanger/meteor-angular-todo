Meteor.publish("todos", function() {
  return Todos.find({
    createdBy: this.userId
  });
});
