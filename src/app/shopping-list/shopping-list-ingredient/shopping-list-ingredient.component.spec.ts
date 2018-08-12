import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListIngredientComponent } from './shopping-list-ingredient.component';

describe('ShoppingListIngredientComponent', () => {
  let component: ShoppingListIngredientComponent;
  let fixture: ComponentFixture<ShoppingListIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
