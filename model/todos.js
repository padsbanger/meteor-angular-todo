Todos = new Mongo.Collection('todos');

Todos.allow({
  insert: function(userId) {
    return userId;
  },
  update: function(userId) {
    return userId;
  },
  remove: function(userId) {
    return userId;
  },
  fetch: ['owner']
});
