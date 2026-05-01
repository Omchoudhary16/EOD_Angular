import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEODComponent } from './view-eod/view-eod.component';
import { AddEODComponent } from './add-eod/add-eod.component';
import { PopModalComponent } from './pop-modal/pop-modal.component';
import { LeaveEODComponent } from './leave-eod/leave-eod.component';

const routes: Routes = [
  { path: '', component: ViewEODComponent },
  { path: 'view', component: ViewEODComponent },
  { path: 'update/:id', component: AddEODComponent },
  { path: 'workDay', component: AddEODComponent },
  { path: 'non-workDay', component: LeaveEODComponent },
  { path: 'pop', component: PopModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
