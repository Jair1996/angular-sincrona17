import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AboutUsPageComponent,
    AboutUsComponent,
    MisionComponent,
    VisionComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    RouterModule
  ]
})
export class AboutUsModule { }
