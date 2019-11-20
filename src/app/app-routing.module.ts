import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './create/create.component';
import {ListComponent} from './list/list.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    {
        path : '',
        component : CreateComponent
      },
      {
        path : 'list',
        component : ListComponent
      },
      {
        path: 'edit/:id',
        component : EditComponent
      }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
