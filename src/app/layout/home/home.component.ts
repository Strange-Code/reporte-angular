import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { GoogleService } from 'src/app/login/google.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nombre: string;

  constructor(
    public authService: GoogleService) {
    this.nombre = 'No sé';
  }
  ngOnInit(): void {
    const user: User = JSON.parse(localStorage.getItem('user')!);
    this.nombre = user.displayName!;
  }
}
