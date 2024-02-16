import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[]  = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img.cuisineaz.com/660x660/2013/12/20/i34581-salade-nicoise-rapide.jpeg'),
  ];
  constructor() {
  }
  ngOnInit(){

  }

}
