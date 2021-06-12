import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  constructor() { }

bookTableForm=new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
  tableFor:new FormControl(''),
  date:new FormControl('')
})

  ngOnInit(): void {
  }

  book(){
    console.log("hello")
    console.log(this.bookTableForm.value)
  }

}
