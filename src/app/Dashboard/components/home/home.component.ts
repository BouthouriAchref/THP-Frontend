import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sub;id : any
  constructor(private router: Router ,private route: ActivatedRoute) { }

  ngOnInit(){
    // this.sub = this.route.params.subscribe(params => {
    //   this.id = params['id'];
    //   //this.router.navigate(['sideBar',{id: this.id}])
    //   });
    // console.log(this.id);
  }

}
