import { Component, OnInit } from '@angular/core';
import { FormdataService } from '../service/formdata.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  fname!: string;
  lname!:string;
  constructor(private fs: FormdataService) { }
  ngOnInit(): void {
    this.fs.namef.subscribe((res) => {
      this.fname = res;
      console.log(this.fname);
      
    })
    
  }

}
