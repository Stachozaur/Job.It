import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialistDetailComponent } from './specialist-detail/specialist-detail.component';
import { SpecialistListComponent } from './specialist-list/specialist-list.component';

const routes: Routes = [
  { path: 'specialists/:id', component: SpecialistDetailComponent },
  {path: 'specialists', component: SpecialistListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

