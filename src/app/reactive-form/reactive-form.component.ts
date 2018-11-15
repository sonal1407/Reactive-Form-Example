/**
 * author - Shahbaz Shaikh
 * Descripation -  This is a class create for reactive form validation.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // Declare FormGroup
  public reactiveForm: FormGroup;
  
  // Declare variable for regular expression
  public charecterRegEx: string;
  public emailRegEx: string;
  public numberRegEx: string;

  constructor(private fb: FormBuilder) { 

    // Define variable for regular expression
    this.charecterRegEx = '^[a-zA-Z \-\']+';                
    this.emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
    this.numberRegEx = '^[0-9]*$';
  }

  ngOnInit() {
    
    // Create the validation for Reactive form
    this.reactiveForm = this.fb.group({
      firstName: ['', [ Validators.required, Validators.minLength(5),Validators.pattern(this.charecterRegEx)]],
      lastName: ['', [ Validators.required, Validators.maxLength(8),Validators.pattern(this.charecterRegEx)]],
      email: ['', [ Validators.required, Validators.pattern(this.emailRegEx)]],
      age : [{ value: 25, disabled: true}],
      phoneNumber: ['', [ Validators.required, Validators.minLength(10),Validators.pattern(this.numberRegEx)]]
    });
  }

  // Create method for submit form
  addData(): void {

    this.reactiveForm.reset();
    alert('SUCCESS!! :-)')

  }
}
