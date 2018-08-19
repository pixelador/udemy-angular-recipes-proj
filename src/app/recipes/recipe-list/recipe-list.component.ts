import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // type derived from recipe.model.ts
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'This is only a test1.',
      'https://www.maxpixel.net/static/photo/1x/Comisa-Healthy-Tomato-Recipe-2930786.jpg'),
    new Recipe(
      'Test Recipe 2',
      'This is only a test1.',
      'https://www.maxpixel.net/static/photo/1x/Comisa-Healthy-Tomato-Recipe-2930786.jpg'),
    new Recipe(
      'Test Recipe 3',
      'This is only a test1.',
      'https://www.maxpixel.net/static/photo/1x/Comisa-Healthy-Tomato-Recipe-2930786.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
