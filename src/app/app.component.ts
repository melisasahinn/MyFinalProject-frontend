import { Component } from '@angular/core';
// data yönetilen yer
@Component({ //html'nin datasını yönettiğimiz yer {}:producy.class gibi obje demek
  selector: 'app-root',// <app-root></app-root> bağlantısının görüldüğü yer
  templateUrl: './app.component.html', //./ aynı klasörde bulunan html
  styleUrls: ['./app.component.css']//köşeli parantez .js dünaysında array demek
})
export class AppComponent {
  title:string = 'northwind'; //veri türü güvenli hale geldi.
  user:string='Melisa Şahin'


}
