import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is a test', 'https://www.maxpixel.net/static/photo/1x/Cooking-Delicious-Korean-Food-Recipe-Asia-822090.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
