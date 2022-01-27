import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
const routes:Routes=[
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent}

]
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes),ReactiveFormsModule,MatToolbarModule ],
  declarations: [ AppComponent, HelloComponent,LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
