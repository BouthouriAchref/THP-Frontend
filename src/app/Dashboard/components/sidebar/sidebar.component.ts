import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sub;id;Admin : any;

  constructor(private route: ActivatedRoute, private admin: AdminService) { }

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   this.id = params['id'];
    //   });
    //   //console.log(this.id);
    //   this.admin.getAdmin(this.id).subscribe((ADMIN : any) => {
    //     this.Admin = ADMIN;
    //     //console.log('___',this.Admin)
    //   })
  }

}


