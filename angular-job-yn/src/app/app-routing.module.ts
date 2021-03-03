import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SpecialistDetailComponent } from './specialist-detail/specialist-detail.component';
import { SpecialistListComponent } from './specialist-list/specialist-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'specialists', component: SpecialistListComponent },
  { path: 'specialist/:id', component: SpecialistDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
