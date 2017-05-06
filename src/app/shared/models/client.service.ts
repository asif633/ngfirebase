import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ClientService {
    
    private uid: string;

    constructor(private af: AngularFireAuth, private afd: AngularFireDatabase, private _loginServ: LoginService) {
        this.af.authState.subscribe(auth => {
            if(auth!=undefined && auth !=null)
                this.uid = auth.uid;
            }
            );
     }
    
    addClient(cas: Client){
        this.afd.list('userClients/'+this.uid).push(cas);
    }

    updateClient(cas: Client){
        this.afd.list('userClients/'+this.uid).update(cas.$key, {clId: cas.clId, name: cas.name});
    }

    getClients(): Observable<Client[]>{
        if(this.uid != undefined || this.uid!=null){
            return this.afd.list('userClients/'+this.uid);
        }
        else{
            return null;
        }
    }

    deleteClient(cas: Client){
        this.afd.list('clients').remove(cas.$key);
    }

}