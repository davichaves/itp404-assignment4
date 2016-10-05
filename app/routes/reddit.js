import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var test = Ember.$.getJSON(`https://www.reddit.com/r/emberjs.json`);
    console.log(test);
    return test;
  }
});
