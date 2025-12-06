import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';
  displayName = '';

  constructor(private auth: AuthService) {}

  onSubmit() {
    this.auth.register(this.username, this.password, this.email, this.displayName);
  }
}
