var App = React.createClass({
  propTypes: {

    recipes: React.PropTypes.array.isRequried,

  },

  render() {
    return (
      <div>
      <ul>
      {
        this.props.recipes.map((r) => <Recipe recipe={r} key={r.id} />)
      }
      </ul>
      </div>
    );
  }
});

var Recipe = React.createClass({
  propTypes: {
    recipe: React.PropTypes.object.isRequried

  },

  getInitialState() {
    return {
      servings: this.props.recipe.Servings,
      updatedServings: this.props.recipe.Servings
    };
  },

  updateServings(e){
  e.preventDefault();
    this.setState({
        updatedServings: this.state.servings
    });
  },

  handleServingsChanged(e){
    this.setState({
    servings: e.target.value
  });
},





  render() {
    return (
      <li>

    <h1>{this.props.recipe.name}</h1>

    <ul className="ingredients">
  <form className="recipeForm" onSubmit={this.updateServings}>
    <fieldset>
    <h4 className="makes">Makes</h4><input value={this.state.servings} onChange={this.handleServingsChanged} className="howmuch" type="text"/>
    <h4 className="servings">servings</h4><input className="US"  type="radio" value="U.S."> U.S.</input>
    <input className="metric"  type="radio" value="Metric"> Metric</input>
    <button  type="submit" className="Adjust">Adjust Recipe</button>
    </fieldset>
</form> {
    this.props.recipe.ingredients.map((a) => {
      return (
        <li key={_.uniqueId()}>
      <input type="checkbox" value="checkbox"/><h5 className="qty">{this.state.updatedServings * a.qty}</h5>
        <h5 className="unit">{a.unit}</h5>
        <h5 className="name">{a.name}</h5>
        </li>
      );
    })

  }
  </ul>
  </li>
);
}
});

export default {App};
