import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialistListComponent } from './specialist-list/specialist-list.component'

const routes: Routes = [
  { path: '', redirectTo: '/specialists', pathMatch: 'full' },
  { path: 'specialists', component: SpecialistListComponent },
  //{ path: 'specialist/:id', component: SpecialistDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
