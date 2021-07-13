import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostsPageComponent } from './costs-page/costs-page.component';
import { ListComponent } from './costs-page/list/list.component';
import { ListItemComponent } from './costs-page/list/list-item/list-item.component';
import { CommentComponent } from './costs-page/list/list-item/comment/comment.component';
import { NewCommentComponent } from './costs-page/list/list-item/new-comment/new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CostsPageComponent,
    ListComponent,
    ListItemComponent,
    CommentComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
