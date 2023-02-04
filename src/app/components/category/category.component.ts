import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category;
  constructor(private categoryService: CategoryService) {}

  public ngOnInit(): void {
    this.getCategories();
  }
  public getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }
  public setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  public getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item ';
    }
  }

  public getAllCategoryClass() {
    if (!this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item ';
    }
  }
}
