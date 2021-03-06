import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shoppinglist.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-shoppinglist",
  templateUrl: "./shoppinglist.component.html",
  styleUrls: ["./shoppinglist.component.css"]
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
