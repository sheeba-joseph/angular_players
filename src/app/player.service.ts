import { Injectable } from '@angular/core';
import { BasketballPlayer } from './Models/player';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayerService {
    private playersUrl = 'api/players';
    constructor(private http: Http) { }
    // players: any[];


    getPlayers(): Promise<BasketballPlayer[]> {

        return this.http.get(this.playersUrl)
            .toPromise()
            .then(res => res.json().data as BasketballPlayer[])
            .catch(this.handleError);
    }
    handleError(error: any) {
        console.log('An Error Occurred', error);
        return Promise.reject(error.message || error);
    }

    /*    getPlayers(): Promise<BasketballPlayer[]> {
         return new Promise(resolve => {
               setTimeout(() => resolve(this.players), 2000);
           });
       }*/

    deletePlayer(player: BasketballPlayer): Promise<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                const i = this.players.indexOf(player, 0);
                if (i > -1) {
                    this.players.splice(i, 1);
                }
            }, 2000);
        });

    }

    insertPlayer(player: BasketballPlayer): Promise<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                this.players.push(player);
            }, 2000);
        });

    }

    updatePlayer(player: BasketballPlayer): Promise<any> {
        // not doing anything here
        return Promise.resolve();
    }
}
