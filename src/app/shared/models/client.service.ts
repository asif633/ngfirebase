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