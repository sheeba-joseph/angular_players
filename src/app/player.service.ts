import { Injectable } from '@angular/core';
import { BasketballPlayer } from './Models/player';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
// import { Observable } from 'rxjs/';



@Injectable()
export class PlayerService {
    private playersUrl = 'api/players';
    // private playersUrl = 'http://localhost:54944/api/Employee';
    constructor(private httpClient: HttpClient) { }
    players: any[];

    /*  // Observable
      getPlayers(): Observable<BasketballPlayer[]> {
          return this.httpClient.get<BasketballPlayer[]>(this.playersUrl);
      }*/

    /*
         getPlayers(): Promise<BasketballPlayer[]> {
            return new Promise(resolve => {
                  setTimeout(() => resolve(this.players), 2000);
              });
          }*/

    getPlayers(): Promise<BasketballPlayer[]> {

        return this.httpClient.get<BasketballPlayer[]>(this.playersUrl)
            .toPromise()
            .then((response) => response);

    }

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

    handleError(error: any) {
        console.log('An Error Occurred', error);
        return Promise.reject(error.message || error);
    }
}
