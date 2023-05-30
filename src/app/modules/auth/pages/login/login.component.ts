import { Component } from '@angular/core';
import { FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: UntypedFormGroup;
  loadForm: boolean = false;

  constructor(public snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.loginForm = new UntypedFormGroup({
      user: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required]),
    });
    this.loadForm = true;
    console.log(this.loginForm.get('user').status);
    console.log('Valid Status =>', this.loginForm.valid);
  }

  onSubmit() {
    for (let key in this.loginForm.value) {
      this.loginForm.value[key] = this.loginForm.value[key].slice(11);
    }
    console.log('form Values =>', this.loginForm.value);
    this.snackbarService.open('Your Response Submitted Sucessfully');
    this.loginForm.reset();
  }
}
