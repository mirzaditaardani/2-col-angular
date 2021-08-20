import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { SideBarActivityComponent } from './component/side-bar-activity/side-bar-activity.component';
import { SideBarChannelComponent } from './component/side-bar-channel/side-bar-channel.component';
import { MainVideosComponent } from './component/main-videos/main-videos.component';
import { MainPeopleComponent } from './component/main-people/main-people.component';
import { MainDocumentComponent } from './component/main-document/main-document.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarActivityComponent,
    SideBarChannelComponent,
    MainVideosComponent,
    MainPeopleComponent,
    MainDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
