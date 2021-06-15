import { Component, Input, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  @Input() FilterSearch :any;
  categories: any;
  hasError = false;
  success = false;
  errorMessage: string;
  constructor(private placeService: PlacesService) { 
    this.placeService.PlaceSubjectEvent.subscribe(res =>{
      if(res){
        this.ngOnInit();
      }
    })
  }

  ngOnInit(){
    this.placeService.getAllCategory().subscribe(async (res) => {
      this.categories = await res.category
      console.log('cat',this.categories)
    })  
  }

  deleteCategory(id){
    console.log(id);
    this.placeService.deleteCategoryById(id).subscribe(res => {
      console.log(res)
      // if (res.message){
      //   this.errorMessage = res.message;
      //   this.success = true
      // }
    })
  }

  onValueChanged(value){
    this.categories = value;
  }

}
