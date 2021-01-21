import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  myFormGroup:FormGroup;
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  const phone=this.fb.group({
    area:[],
    prefix:[],
    line:[]
  })

  this.myFormGroup=this.fb.group({
    email:[],
    homePhone:phone,
    officePhone:phone,

  })

  }

}
