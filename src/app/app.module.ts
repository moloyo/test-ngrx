import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMainModule } from './app-main/app-main.module';
import { ReduxCoreModule } from './redux-core/redux-core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMainModule,
    ReduxCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
