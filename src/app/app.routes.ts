import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginemailComponent } from './loginemail/loginemail.component';
import { SigninComponent } from './loginemail/signin/signin.component';
import { SignupComponent } from './loginemail/signup/signup.component';
import { CaseContainerComponent } from './case-container/case-container.component';
import { AuthGuard } from './shared/authguard.service';
import { ClientContainerComponent } from './client-container/client-container.component';
import { VerifyemailComponent } from './loginemail/verifyemail.component';
import { SignedupComponent } from './loginemail/signedup.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent, children: [
        {path: '', component: NavbarComponent, children: [
            {path: 'signin', component: SigninComponent},
            {path: 'signup', component: SignupComponent},
            {path: 'emailverify', component: VerifyemailComponent},
            {path: 'signedup', component: SignedupComponent},
            {path: 'case', component: CaseContainerComponent, canActivate: [AuthGuard]},
            {path: 'client', component: ClientContainerComponent, canActivate: [AuthGuard]}
        ]}
    ]}
];

export const routes = RouterModule.forRoot(appRoutes,{useHash: false}); 
