import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-places-to-check',
  templateUrl: './places-to-check.component.html',
  styleUrls: ['./places-to-check.component.css']
})
export class PlacesToCheckComponent implements OnInit {
  products: any[] = [];
  subs: Subscription[] = [];
  errorMessage: string;
  hasError = false;
  success = false;
  public places: any;
  constructor(private placeService: PlacesService) { 
    this.placeService.PlaceSubjectEvent.subscribe(res =>{
      if(res){
        this.ngOnInit();
      }
    })
  }

  ngOnInit() {
    this.placeService.getAllPlacesToCheck().subscribe(async (res) => {
      if (res.success) {
        this.places = await res.data;
        console.log('aaa',this.places)
      }
    })
  }

  deletePlace(id){
    // console.log('__',id)
    this.placeService.deletePlaceById(id).subscribe(async (res) => {
      console.log('___',res)
    })
  }

  checkPlace(id){
    console.log('__',id)
    this.placeService.checkPlace(id).subscribe(async (res) => {
      console.log('___',res)
    })
  }

  

}
