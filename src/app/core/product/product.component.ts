import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  buttonClick() {
    let logInBtn = document.getElementById('logIn');
    logInBtn?.click();
  }

}
