import {recipe, recipeCollection} from 'models/models';
import {App} from 'components/components';


var AppRouter = Backbone.Router.extend({
     routes: {
       '': 'index'
     },

    initialize() {
      this.newRecipe = new recipe();
      this.recipes = new recipeCollection();
      this.listenTo(this.recipes, 'sync add remove', this.renderApp);
      this.listenTo(this.newRecipe, 'change', this.renderApp);
    },

    index() {
      this.recipes.fetch();
    },

    renderApp() {
      ReactDOM.render(
        <App
        recipes={this.recipes.toJSON()}
        newRecipe={this.newRecipe.toJSON()}
        />,
      document.getElementById('container'));
    }
});

window.appRouter = new AppRouter();
Backbone.history.start();
