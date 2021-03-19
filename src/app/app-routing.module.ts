import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { FaqComponent } from './faq/faq.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { MacroComponent } from './macro/macro.component';
import { InboxComponent } from './inbox/inbox.component';
import { InterfaceAgentComponent } from './interface-agent/interface-agent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SendDemandeComponent } from './send-demande/send-demande.component';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent },
  //{ path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
 // { path: '', redirectTo: 'home', pathMatch: 'full' },


  
  //{path:'interface-agent',component:InterfaceAgentComponent},
  {path:'interface-agent', component:InterfaceAgentComponent,
    children:[
      {
        path:'inbox',component:InboxComponent,
        
        
      },
      {
        path:'email-detail',component:EmailDetailComponent,
        
        //outlet:'contentOutlet'
      },
      {
        path:'email-detail/:id',component:EmailDetailComponent,
        
        //outlet:'contentOutlet'
      },
      {path:'macro',component:MacroComponent},
      {path:'faq-list',component:FaqListComponent},
      { path: 'register', component: RegisterComponent },
      { path: 'profile', component: ProfileComponent },
      
      
    ]},
    
  {path:'faq',component:FaqComponent},
  
  
  {path:'send-demande', component:SendDemandeComponent},
  
  {path: '', redirectTo:'send-demande',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
