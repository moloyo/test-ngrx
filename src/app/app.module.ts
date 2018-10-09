import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PeopleModule } from './people/people.module';
import { StoreModule } from '@ngrx/store';
import { peopleReducer } from './reducers/people.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PeopleModule,
    StoreModule.forRoot({
      people: peopleReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
