import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { ButtonComponent } from './task-one/button/button.component';
import { CardComponent } from './task-one/card/card.component';
import { ShowUsersPipe } from './pipes/show-users.pipe';
import { ShowAgePipe } from './pipes/show-age.pipe';
import { BackgroundDirective } from './directives/background.directive';
import { RectangleBackgroundDirective } from './directives/rectangle-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    TaskTwoComponent,
    ButtonComponent,
    CardComponent,
    ShowUsersPipe,
    ShowAgePipe,
    BackgroundDirective,
    RectangleBackgroundDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
