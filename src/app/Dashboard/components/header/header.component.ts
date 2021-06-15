import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() Data: any;
  @Output() onValueChanged = new EventEmitter<any>();
  JsonData : any;
  constructor() {
    
   }

  ngOnInit(): void { 
  }


  FilterSearch(event: any) {
    console.log('not vide',this.Data)
    const val = event.target.value;
    //console.log('val', val);
    if (val && val.trim() != '') {
      this.JsonData = this.Data.filter((item) => {
        if(item.fullname){
          return (item.fullname.toLowerCase().indexOf(val.toLowerCase()) > -1)
        } else {
          return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1)
        }
      })
      console.log(this.JsonData)
      this.onValueChanged.emit(this.JsonData);
    }
    if (val == '') {
      console.log('vide',this.Data)
      this.onValueChanged.emit(this.Data)
    }
  }

}
