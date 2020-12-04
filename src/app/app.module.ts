import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendDemandeComponent } from './send-demande/send-demande.component';

import { FormsModule } from '@angular/forms';
import { InterfaceAgentComponent } from './interface-agent/interface-agent.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InboxComponent } from './inbox/inbox.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';


//for french date
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
//for french date
@NgModule({
  declarations: [
    AppComponent,
    SendDemandeComponent,
    InterfaceAgentComponent,
    SidebarComponent,
    ContentComponent,
    NavbarComponent,
    InboxComponent,
    EmailDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [/*for french date*/{provide: LOCALE_ID, useValue: 'fr' }/*for french date*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
