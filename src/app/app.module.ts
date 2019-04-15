import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RacineComponent } from './pages/racine/racine.component';
import { CreateKittenComponent } from './components/create-kitten/create-kitten.component';
import { ListKittenComponent } from './components/list-kitten/list-kitten.component';
import { UserKittenComponent } from './components/user-kitten/user-kitten.component';


@NgModule({
  declarations: [
    AppComponent,
    RacineComponent,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
