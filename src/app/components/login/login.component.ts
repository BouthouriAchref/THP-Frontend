import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: any;
  credentialsForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private loginservice: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.credentialsForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  login(){
    //console.log('this',this.credentialsForm.value)
    this.loginservice.login(this.credentialsForm.value).subscribe(async (response : any) => {
      console.log('response',response)
      await this.router.navigate(['/home'])
    })
  }

}
