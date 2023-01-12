import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AboutUsPageComponent,
        children: [
          {
            path: 'mision',
            component: MisionComponent,
          },
          {
            path: 'vision',
            component: VisionComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
