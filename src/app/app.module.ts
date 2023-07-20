import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditorNotasComponent } from './editor-notas/editor-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorNotasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
