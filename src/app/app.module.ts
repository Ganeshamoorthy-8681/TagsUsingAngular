import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsComponent } from './forms/forms.component';
import { SubmittedDataComponent } from './submitted-data/submitted-data.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TagComponent } from './tag/tag.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormsComponent,
    SubmittedDataComponent,
    PageNotFoundComponent,
    TagComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/forms',
        pathMatch:'full'
    },
      {
        path: "forms",
        component:FormsComponent
      },
    
      {
        path: "submitted-data",
        component: SubmittedDataComponent
      },
      {
        path: "**",
        component: PageNotFoundComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
