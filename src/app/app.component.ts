import { Component } from '@angular/core';
// data yönetilen yer
@Component({
  selector: 'app-root', //
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Melisa Şahin';
}
