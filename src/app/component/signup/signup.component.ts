import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  singupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.singupForm = this.formBuilder.group({
      fullname: '',
      email: '',
      password: '',
      confirm_password: '',
    });
  }
}
