import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

//renders a list of recipe components
class RecipeList extends Component{
  static defaultProps = {
  	recipes: [
	  	{
	  		title: "Spaghetti",
	  		instructions: "Open jar of Spaghetti sauce. Bring water to a boil.",
	  		ingredients: ["pasta", "8 cups water", "1 box of spaghetti"],
	  		img: "spaghetti.jpg"
	  	},
	  	{
	  		title: "Milkshake",
	  		instructions: "Combine ice cream and milk. Blend together.",
	  		ingredients: ["2 scoops Ice cream","8 ounces milk"],
	  		img: "milkshake.jpg"
	  	},
	  	{
	  		title: "Avocado Toast",
	  		instructions: "Toast bread. Slice avocado and sprinkle salt and pepper",
	  		ingredients: ["2 slices of bread", "1 avocado", "salt and pepper"],
	  		img: "avocado.jpg"
	  	}
  	]
  }

  static propTypes = {
  	recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render(){
  	const recipes = this.props.recipes.map((r,index) => (
  		<Recipe key={index} {...r} />
  	));

  	return (
  		<div className="recipe-list">
  			{recipes}
  		</div>
  	)
  }
}

export default RecipeList;
