import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css'],
  providers: [RecipeService]
})
export class RecipebookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
