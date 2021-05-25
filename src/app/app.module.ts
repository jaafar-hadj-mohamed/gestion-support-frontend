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

import { NgxEchartsModule } from 'ngx-echarts';

//for french date
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FaqComponent } from './faq/faq.component';
import { DemandeService } from './demande.service';
import { MacroComponent } from './macro/macro.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    FaqListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    })
  ],
  providers: [authInterceptorProviders,/*for french date*/{provide: LOCALE_ID, useValue: 'fr' }/*for french date*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
