import { Component, OnInit } from '@angular/core';
import { FormdataService } from '../service/formdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor incididunt ut labore magna aliqua.";
  image: string = "https://i.postimg.cc/xd1BkDzg/IMG-4630-removebg-preview.png"

  constructor() { }
  ngOnInit(): void {

  }

 
}