$.ajaxSetup({
  headers: {
    "X-Parse-Application-Id": "argfKA7KOtMoK2JCuX9Vru7smXnX73bNTql19Gbu",
    "X-Parse-REST-API-Key": "vYLKsxjR2IOIevoZ2z6asjxiYZpdcSQGxDDZD7e1",
  }
});


var recipe = Backbone.Model.extend ({
     idAttribute: 'objectId',

     urlRoot: "https://api.parse.com/1/classes/Recipe",

     defaults: {
       name: "",
       ingredients: "",
     },

     toJSON(){
       var result = _.clone(this.attributes);
       result.id = result.objectId;
       delete result.objectId;
       return result;
     }

});

var recipeCollection = Backbone.Collection.extend({
      model: recipe,
      url: "https://api.parse.com/1/classes/Recipe",
      parse(response) {
        return response.results;
      }
});

export default {recipe, recipeCollection};
