import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipeListComponent } from './recipebook/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipebook/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipebook/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shoppinglist/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipebook/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipebook/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    RecipebookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
