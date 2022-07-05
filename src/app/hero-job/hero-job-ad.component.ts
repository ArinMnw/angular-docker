import { Component, Input } from '@angular/core';
import { AdComponent } from '../shared/model/interface/ad';

@Component({
  selector: 'hero-job',
  template: `
    <div class="job-ad">
      <h1 style="font-weight: bold;">{{data.id}}. hero-job</h1>
      <h4>{{data.headline}}</h4>
      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

  onChange() {
    console.log('change Hero Job');
  }
}
