import { Component, OnInit } from '@angular/core';
import { FormdataService } from '../service/formdata.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formmodel',
  templateUrl: './formmodel.component.html',
  styleUrls: ['./formmodel.component.css']
})
export class FormmodelComponent implements OnInit{
  firstname!: string;
  constructor(private fs: FormdataService,private fb:FormBuilder) { }


  contactFormModel = this.fb.group({
    firstname: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]+')]],
    lastname: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]+')]],
    email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
    phone:['',[Validators. required, Validators. pattern("^((\\+91-?) |0)?[0-9]{10}$")]],
    subject:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+')]]  ,
    message:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+')]] 
  })

ngOnInit(): void {
  
}
  onButtonClick() {
    console.log(this.firstname);
    this.fs.dataemit(this.firstname)

  }


  send(){

  }
}
