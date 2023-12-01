import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{


  /*loginForm = this.router({
    username : ['',[Validators.required,Validators.email]],
    password : ['',[Validators.required]]
  })
 constructor(private fb: FormBuilder){

  }*/



  constructor(private router: Router) { }

  
    ngOnInit() {
    }
   
  
  username : string ="";
  password : string ="";
  show: boolean= false;
  login(){
  
    if(this.username == 'sasmitapriyadarshinidas@gmail.com' && this.password == 'password' ){
      this.router.navigate(["user"]);
     } else {
       alert("Invalid credentials");
     }
  this.clear();
  }
  register(){

  }
  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
  }

}
