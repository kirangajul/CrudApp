import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StudentRegistrationComponent,
    StudentDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports :[
    StudentRegistrationComponent,
    StudentDataComponent
  ]
})
export class CollegeModule { }
