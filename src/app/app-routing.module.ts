import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { VideosComponent } from './videos/videos.component';
import { SetupComponent } from './setup/setup.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'Start', component: StartComponent},
  { path: 'Videos', component: VideosComponent},
  { path: 'Setup', component: SetupComponent},
  { path: 'About', component: AboutComponent},
  { path: 'FAQ', component: FaqComponent},
  { path: 'Contact', component: ContactComponent},
  { path: 'Terms', component: TermsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, StartComponent, VideosComponent,
   SetupComponent, AboutComponent, FaqComponent, ContactComponent];
