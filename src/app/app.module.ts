import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SayComponent } from './say/say.component';
import { SayWorkComponent } from './say-work/say-work.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    
    AppComponent,
    AboutComponent,
    SayComponent,
    SayWorkComponent,
    FormComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
