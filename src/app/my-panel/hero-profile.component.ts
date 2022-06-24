import { Component, Input } from '@angular/core';
import { AdComponent } from '../shared/model/interface/ad';

@Component({
  selector: 'hero-profile',
  template: `
    <div class="hero-profile">
      <h1 style="font-weight: bold;">{{data.id}}. hero-profile</h1>
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `,
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;

  onChange() {
    console.log('change Hero profile');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
