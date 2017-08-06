import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CallBackComponentComponent } from './call-back-component/call-back-component.component';
import { TimersComponent } from './timers/timers.component';
import { DomEventComponent } from './dom-event/dom-event.component';
import { GeneratorFunctionComponent } from './generator-function/generator-function.component';

@NgModule({
  declarations: [
    AppComponent,
    CallBackComponentComponent,
    TimersComponent,
    DomEventComponent,
    GeneratorFunctionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
