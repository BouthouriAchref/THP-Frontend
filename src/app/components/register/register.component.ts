import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentialsForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private loginservice: LoginService,
    private router: Router) { }

    ngOnInit(): void {
      this.credentialsForm = this.formBuilder.group({  
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,  Validators.minLength(6)]),
      confirm_password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  register(){
    this.loginservice.register(this.credentialsForm.value).subscribe(res =>{
      console.log(this.credentialsForm.value);
      this.loginservice.login(this.credentialsForm.value).subscribe(res => {
        this.router.navigate(['/home']);
      });
      
    });
  }

}
