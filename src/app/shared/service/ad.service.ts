import { Injectable } from '@angular/core';
import { HeroJobAdComponent } from '../../my-panel/hero-job-ad.component';
import { HeroProfileComponent } from '../../my-panel/hero-profile.component';
import { AdItem } from '../model/class/ad-item';

@Injectable({ providedIn: 'root' })
export class AdService {
  getAds() {
    return [
      new AdItem(
        HeroProfileComponent,
        'HeroProfileComponent',
        'hero-profile',
        { id: 1, name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new AdItem(
        HeroProfileComponent,
        'HeroProfileComponent',
        'hero-profile',
        { id: 2, name: 'Dr IQ', bio: 'Smart as they come' }
      ),
      new AdItem(
        HeroJobAdComponent,
        'HeroJobAdComponent',
        'hero-job',
        { id: 3, headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new AdItem(
        HeroJobAdComponent,
        'HeroJobAdComponent',
        'hero-job',
        { id: 4, headline: 'Openings in all departments', body: 'Apply today' }
      )
    ];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
