exports.create = function(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('Welcome to Marko! <ui-tabs><ui-tab title="Home">Content for Home</ui-tab><ui-tab title="Profile">Content for Profile</ui-tab><ui-tab title="Messages">Content for Messages</ui-tab></ui-tabs>');
  };
}