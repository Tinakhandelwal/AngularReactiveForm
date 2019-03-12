import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  profileForm = new FormGroup({
    FirstName: new FormControl('',Validators.required),
    LastName: new FormControl('',Validators.required),
    Email: new FormControl('', [Validators.email,Validators.required]),
    startval: new FormControl('+91'),
    PhoneNo: new FormControl('',[Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]+')]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('',[Validators.minLength(6),Validators.maxLength(6)])
    })
  });
  get formdata(){
    return this.profileForm.controls;
  }
  submit;
  onSubmit() {
    this.submit = true;

    // stop here if form is invalid
    if (this.profileForm.invalid) {
        return;
    }

    console.log(this.profileForm.value);
    alert("Data is Recorded")
  }

 
}
