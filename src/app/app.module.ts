import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendDemandeComponent } from './send-demande/send-demande.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterfaceAgentComponent } from './interface-agent/interface-agent.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InboxComponent } from './inbox/inbox.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';

import { EditorModule } from '@tinymce/tinymce-angular';


//for french date
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FaqComponent } from './faq/faq.component';
import { DemandeService } from './demande.service';
import { MacroComponent } from './macro/macro.component';
import { FaqListComponent } from './faq-list/faq-list.component';
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
    EmailDetailComponent,
    FaqComponent,
    MacroComponent,
    FaqListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule
  ],
  providers: [/*for french date*/{provide: LOCALE_ID, useValue: 'fr' }/*for french date*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
