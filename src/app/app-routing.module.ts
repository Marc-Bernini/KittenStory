import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateKittenComponent } from './components/create-kitten/create-kitten.component';
import { RacineComponent } from './pages/racine/racine.component';

const routes: Routes = [
  {
    path: 'create', component: CreateKittenComponent
  },
  {
    path: '', component: RacineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
