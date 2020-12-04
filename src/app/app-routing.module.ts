import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { InboxComponent } from './inbox/inbox.component';
import { InterfaceAgentComponent } from './interface-agent/interface-agent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SendDemandeComponent } from './send-demande/send-demande.component';

const routes: Routes = [
  
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
      }
      
    ]},
  {path:'send-demande', component:SendDemandeComponent},
  
  {path: '', redirectTo:'send-demande',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
