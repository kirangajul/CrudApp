import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {

  constructor(public cs : CommonService){
    
  }

  stu1 : Student = {
    id: 0,
    name: '',
    address: '',
    mobile: 0,
    marks: 0,
    course: '',
    division: ''
  }
  saveStudent(stu : Student){
    console.log("in student reg compo");

    if(stu.id==0)
    this.cs.saveStudent(stu).subscribe();
    else
    this.cs.updateStudent(stu).subscribe();
   window.location.reload();
  }

  resetStudent(){
    this.cs.stu = Object.assign({}, this.stu1);
  }
}
