import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.ajax({
    url: 'https://www.reddit.com/r/emberjs.json',
    type: 'get'
    }).then(function(json){
      return json.data.children.map(function(eachPost){
        var cleanArrayOfReddits = {
          score: eachPost.data.score,
          title: eachPost.data.title,
          url: eachPost.data.url,
          num_comments: eachPost.data.num_comments,
          archived: eachPost.data.archived ? 'Archived': 'Not Archived'
        };
        return cleanArrayOfReddits;
      });
    });
  }
});
