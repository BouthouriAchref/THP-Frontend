import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  users :any;
  constructor(private admin: AdminService) {
    this.admin.UsersSubjectEvent.subscribe(res =>{
      if(res){
        this.ngOnInit();
      }
    })
   }

  ngOnInit() {
    this.admin.getAllUsers().subscribe(async (res) => {
      this.users = await res.users
      console.log('___',this.users)
    })
    
  }

  deleteUser(id){
    this.admin.deleteUserById(id).subscribe(async (res) => {
      console.log('___',res)
    })
  }

}
