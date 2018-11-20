import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shoppinglist/shoppinglist.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "this is a test",
      "https://www.maxpixel.net/static/photo/1x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Another Recipe",
      "this is a test",
      "https://www.maxpixel.net/static/photo/1x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngToShopping(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
