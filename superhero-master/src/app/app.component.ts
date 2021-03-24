import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel';
  @ViewChild('sidenav') sidenav: MatSidenav;
  close(reason: string) {
    // this.reason = reason;
    this.sidenav.close();
  }
}
