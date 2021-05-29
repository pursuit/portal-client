import { Component } from '@angular/core';
import { UserRegistration } from '../user-registration'
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registration = new UserRegistration('Bambang', '');
  submitMsg = ""

  constructor(private _registerService: RegisterService) { }

  onSubmit(): void {
    console.log(this.registration);

    this._registerService.register(this.registration)
      .subscribe(
        _ => this.submitMsg = 'Success!',
        error => this.submitMsg = error.statusText
      )

    console.log("submitted");
  }
}
