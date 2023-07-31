import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  selectedContent: string = 'product';

  showContent(content: string) {
    this.selectedContent = content;
  }
}
