import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent {

  // stu1 : Student = {
  //   id: 0,
  //   name: '',
  //   address: '',
  //   mobile: 0,
  //   marks: 0,
  //   course: '',
  //   division: ''
  // }

  studentList : Student[] = [];
  constructor(public cs : CommonService){
    this.cs.getStudentData().subscribe(
      (data : Student[]) => {
        this.studentList = data;
      }
    );
  }

  deleteStudent(id : number){
    this.cs.deleteStudent(id).subscribe();
    window.location.reload();
  }

  editStudent(stu : Student){
    this.cs.stu = Object.assign({}, stu);
  }
}
