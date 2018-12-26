import { Component, OnInit } from '@angular/core';
import { BasketballPlayer } from './Models/player';
import { PlayerService } from './player.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isNewForm: boolean;
  showForm: boolean;
  formPlayer: BasketballPlayer;
  players: BasketballPlayer[];
  constructor(private playerservice: PlayerService) {
  }

  ngOnInit() {
    this.playerservice.getPlayers()
      .then(players => this.players = players)
      .catch(error => console.log(error));
  }
  ShowPlayerForm(player: BasketballPlayer) {
    if (!player) {
      player = new BasketballPlayer('', '', '');
      this.isNewForm = true;
    }
    this.showForm = true;
    this.formPlayer = player;
  }

  RemovePlayer(player: BasketballPlayer) {
    this.playerservice.deletePlayer(player)
      .catch(error => console.log(error));
  }

  SavePlayer(player: BasketballPlayer) {
    if (player) {
      if (this.isNewForm) {
        this.playerservice.insertPlayer(player)
          .catch(error => console.log(error));
      } else {

        this.playerservice.updatePlayer(player)
          .catch(error => console.log(error));
      }
    }

    this.isNewForm = false;
    this.showForm = false;
    player = null;
  }
}
