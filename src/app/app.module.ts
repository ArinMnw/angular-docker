import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPanelComponent } from './my-panel/my-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { AdDirective } from './shared/directive/ad.directive';
import { SafeHtml } from './shared/pipe/safe-html.pipe';
import { registerComponent } from './shared/model/class/component-registry';
import { HeroJobAdComponent } from './my-panel/hero-job-ad.component';
import { HeroProfileComponent } from './my-panel/hero-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    MyPanelComponent,
    AdDirective,
    SafeHtml,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerComponent(HeroProfileComponent, 'hero-profile');
    registerComponent(HeroJobAdComponent, 'hero-job');
  }
}
