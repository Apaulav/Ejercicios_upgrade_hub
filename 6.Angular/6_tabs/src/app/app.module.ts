import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { ItemsComponent } from './items/items.component';
import { ParrafComponent } from './parraf/parraf.component';
import { ArrowComponent } from './arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponentComponent,
    ItemsComponent,
    ParrafComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
