import { Injectable } from '@angular/core';
// import { HeroJobAdComponent } from '../../hero-job/hero-job-ad.component';
// import { HeroProfileComponent } from '../../hero-profile/hero-profile.component';
import { AdItem } from '../model/class/ad-item';

@Injectable({ providedIn: 'root' })
export class AdService {
  getAds() {
    return [
      new AdItem(
        'hero-profile',
        { id: 1, name: 'Bombasto', bio: 'Brave as they come' }
      ),
      new AdItem(
        'hero-profile',
        { id: 2, name: 'Dr IQ', bio: 'Smart as they come' }
      ),
      new AdItem(
        'hero-job',
        { id: 3, headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new AdItem(
        'hero-job',
        { id: 4, headline: 'Openings in all departments', body: 'Apply today' }
      )
    ];
    //#region all argument
    // return [
    //   new AdItem(
    //     HeroProfileComponent,
    //     'HeroProfileComponent',
    //     'hero-profile',
    //     { id: 1, name: 'Bombasto', bio: 'Brave as they come' }
    //   ),
    //   new AdItem(
    //     HeroProfileComponent,
    //     'HeroProfileComponent',
    //     'hero-profile',
    //     { id: 2, name: 'Dr IQ', bio: 'Smart as they come' }
    //   ),
    //   new AdItem(
    //     HeroJobAdComponent,
    //     'HeroJobAdComponent',
    //     'hero-job',
    //     { id: 3, headline: 'Hiring for several positions', body: 'Submit your resume today!' }
    //   ),
    //   new AdItem(
    //     HeroJobAdComponent,
    //     'HeroJobAdComponent',
    //     'hero-job',
    //     { id: 4, headline: 'Openings in all departments', body: 'Apply today' }
    //   )
    // ];
    //#endregion
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
