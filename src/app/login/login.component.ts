import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { custom } from '../custom';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formdata:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formdata=this.fb.group({
      name:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[0-9]+$')]],
      confirmpassword:['',Validators.required]
    },{Validator:custom('password','confirmpassword')})
  }

}