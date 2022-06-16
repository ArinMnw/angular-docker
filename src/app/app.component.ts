import { Component } from '@angular/core';
const wifi = require('node-wifi');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-docker';
  constructor() {
  }

  ngOnInit(): void {

    // wifi.scan((error, networks) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log(networks);
    //   }
    // });

  }
}
