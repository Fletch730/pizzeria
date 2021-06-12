import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  contactForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    subject:new FormControl('')
  })

  ngOnInit(): void {
  }
contact(){
console.log(this.contactForm.value)
}
}
