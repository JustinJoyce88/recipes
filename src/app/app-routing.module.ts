import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipebookComponent } from "./recipebook/recipebook.component";
import { ShoppinglistComponent } from "./shoppinglist/shoppinglist.component";
import { RecipeStartComponent } from "./recipebook/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipebook/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipebook/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipebook", pathMatch: "full" },
  {
    path: "recipebook",
    component: RecipebookComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  },
  { path: "shoppinglist", component: ShoppinglistComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
