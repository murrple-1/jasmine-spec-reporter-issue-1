import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from '@app/app.routing';
import { AppComponent } from '@app/app.component';

@NgModule({
  imports: [
    BrowserModule,

    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
