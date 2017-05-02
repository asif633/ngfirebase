# Ngfirebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1. Using angularfire2 with this.

## Firebase setup
Run `npm install firebase angularfire2 --save` to install firebase and angularfire2

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Next in `app.module.ts` add

```
    import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
    
```

and 

```
export const fireConfig = {
    apiKey: "AIzaSyDQ9XNiF58GMGJ-FDTO75jn7DJ5t0XtbI0",
    authDomain: "bongish-food.firebaseapp.com",
    databaseURL: "https://bongish-food.firebaseio.com",
    projectId: "bongish-food",
    storageBucket: "bongish-food.appspot.com",
    messagingSenderId: "12665371470"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

AngularFireModule.initializeApp(fireConfig, myFirebaseAuthConfig),

```
We will need two providers `LoginService, AuthGuard`

The code for `LoginService`

```
import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { User } from './user.model';

@Injectable()
export class LoginService {

    constructor(public af: AngularFire) {
    }

    login(user: User) {
        return this.af.auth.login({ email: user.email, password: user.password });
    }

    logout() {
        return this.af.auth.logout();
    }

}
```

and code for `AuthGuard`

```
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _loginServ: LoginService, 
                private router: Router) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this._loginServ.af.auth.map((auth) => {
        if (!auth) {
          this.router.navigateByUrl('/');
          return false;
        }
        return true;
    }).take(1);
  }
}
```

The `app.router.ts` file

```
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { CommittieesComponent } from './committiees/committiees.component';
import { TopicsComponent } from './topics/topics.component';
import { KeynotespeakersComponent } from './keynotespeakers/keynotespeakers.component';
import { JournalsComponent } from './journals/journals.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationfeeComponent } from './registrationfee/registrationfee.component';
import { ParticipantsComponent } from './participants/participants.component';
import { AbstractsComponent } from './abstracts/abstracts.component';
import { ImportantComponent } from './important/important.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { ConferencevenueComponent } from './conferencevenue/conferencevenue.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './admin/container/container.component';
import { AuthGuard } from './shared/authguard.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';
import { TripComponent } from './trip/trip.component';
import { InvitedspeakersComponent } from './invitedspeakers/invitedspeakers.component';

const appRoutes: Routes = [
    {
        path: '', component: AppComponent, children: [
            {
                path: '', component: HomeComponent, children: [
                    {path: 'login', component: LoginComponent },
                ]
            },
            { path: 'manageusers', component: ContainerComponent, canActivate: [AuthGuard] }
        ]
    },
    { path: '**', component: NotfoundComponent }
]

export const routes = RouterModule.forRoot(appRoutes, { useHash: false });
```

CRUD file sample

```
import { Injectable } from '@angular/core';
import { Author } from './author.model';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorService{
    
    constructor(private af: AngularFire){}
    
    addAuthor(author: Author){
        this.getAuthors().subscribe(res => {
                author.id = res.length+1;
            });
        return this.af.database.list('authors').push(author);
    }

    updateAuthor(author: Author){
        this.af.database.list('authors').update(author.$key, {firstName: author.firstName, lastName: author.lastName, institute: author.institute, city: author.city, country: author.country, email: author.email, abstractContent: author.abstractContent, approved: author.approved, keywords: author.keywords, titleOfStudy: author.titleOfStudy, otherAuthors: author.otherAuthors || null});
    }

    getAuthors(): Observable<Author[]>{
        return this.af.database.list('authors');
    }

    getAuthor(author: Author){
        
    }

}
```
Some code for ready use

```
    getCasesOfUser(): Case[]{
        let cases:Case[]=[];
        if(this.uid !=undefined || this.uid !=null){
            this.af.database.list('usercases/'+this.uid)
                .forEach(res => res.forEach(
                    res => 
                    {
                        console.log(res.$key);
                        this.af.database.object(`cases/`+ res.$key).subscribe(res=> {
                            console.log(res);
                            cases.push(res);
                        })
                    }    
                ));
        }
        return cases;
    }

    getUserCases(): Observable<Case[]>{
        if(this.uid !=undefined || this.uid !=null){
           return  this.af.database.list('usercases/'+this.uid)
            .map(res => res.map(res => res.$key))
            .map(lspc => lspc.map(lessonKey => this.af.database.object('cases/' + lessonKey)) )
            .mergeMap(fbojs => Observable.combineLatest(fbojs) )
        }
    }
```
Rules file
```
{
  "rules": {
    "cases":{
    	".read": "auth != null || auth == null",
      ".write": "auth != null"
    },
    "usercases":{
    	".read": "auth != null || auth == null",
    	"$uid": {
        ".write": "auth != null && auth.uid == $uid"
      }
    },
    "userClients": {
      "$uid": {
        ".read": "auth.uid == $uid",
        ".write": "auth.uid == $uid"
      }
    }  
  }
}
```
Some more code

```
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Client } from './client.model';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login.service';

@Injectable()
export class ClientService {
    
    private uid: string;

    constructor(private af: AngularFire, private _loginServ: LoginService) {
        this.af.auth.subscribe(auth => {
            if(auth!=undefined && auth !=null)
                this.uid = auth.uid;
            }
            );
     }
    
    addClient(cas: Client){
        this.af.database.list('userClients/'+this.uid).push(cas);
    }

    updateClient(cas: Client){
        this.af.database.list('userClients/'+this.uid).update(cas.$key, {clId: cas.clId, name: cas.name});
    }

    getClients(): Observable<Client[]>{
        if(this.uid != undefined || this.uid!=null){
            return this.af.database.list('userClients/'+this.uid);
        }
        else{
            return null;
        }
    }

    deleteClient(cas: Client){
        this.af.database.list('clients').remove(cas.$key);
    }

}
```
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
