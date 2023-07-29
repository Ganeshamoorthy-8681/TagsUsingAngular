import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { TagsDynamicFormModule } from './tags-dynamic-form/tags-dynamic-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TagsDynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
