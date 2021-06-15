import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlacesService } from 'src/app/services/places.service';

declare var $: any;
@Component({
  selector: 'app-all-places',
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.css']
})
export class AllPlacesComponent implements OnInit {
  @Input() FilterSearch :any;
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
    this.placeService.getAllPlaces().subscribe(async (res) => {
      if (res.success) {
        this.places = await res.data;
        console.log('____',this.places)
      }
    })

  }

  deletePlace(id){
    // console.log('__',id)
    this.placeService.deletePlaceById(id).subscribe(async (res) => {
      console.log('___',res)
    })
  }

  onValueChanged(value){
    this.places = value;
  }
}
