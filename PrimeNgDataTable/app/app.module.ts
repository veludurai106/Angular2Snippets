import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';

// Import PrimeNG modules
import { DataTableModule, InputTextareaModule, PanelModule, DropdownModule } from 'primeng';

@NgModule({
  imports:      [ BrowserModule, DataTableModule, InputTextareaModule, FormsModule, PanelModule, DropdownModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/