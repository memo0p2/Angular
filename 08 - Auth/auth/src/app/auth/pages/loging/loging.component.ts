import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal  from "sweetalert2";
@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    email: ['memo@test.com',[Validators.required,Validators.email]],
    password: ['123456',[Validators.required,Validators.minLength(6)]],
  });

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(){
    const{email,password} = this.miFormulario.value;
    this.authService.login(email,password).subscribe((resp) => {
      if (resp===true) {
        this.router.navigateByUrl('/dashboard')
      }else{
        Swal.fire('Error',resp,'error')
      }
    })
    // this.router.navigateByUrl('/dashboard')
  }

}
