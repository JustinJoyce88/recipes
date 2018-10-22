import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "this is a test",
      "https://www.maxpixel.net/static/photo/1x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg"
    ),
    new Recipe(
      "Another Recipe",
      "this is a test",
      "https://www.maxpixel.net/static/photo/1x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelect(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
