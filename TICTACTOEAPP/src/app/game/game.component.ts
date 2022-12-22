import { Component, OnInit } from '@angular/core';
import { Gamelogic } from '../gamelogic';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [Gamelogic]
})

export class GameComponent implements OnInit {
  constructor(public game: Gamelogic) {}

  ngOnInit(): void {
    
  }

  startGame(): void {
    this.game.gameStart()

    const currentPlayer = 'Current turn: Player ' + this.game.currentTurn;
    const information = document.querySelector('#current-status');
    information!.innerHTML = currentPlayer;
  }

  async clickSubfield( subfield: any ): Promise<void>{ 
    if (this.game.gameStatus === 1){
      const position = subfield.currentTarget.getAttribute('position');
      console.log(position);

      this.game.setField(position, this.game.currentTurn);

      const color = this.game.getPlayerColorClass(); 
      subfield.currentTarget.classList.add(color);

      await this.game.checkGameEndWinner().then((end: boolean) => {
        if (this.game.gameStatus === 0 && end){
          const information = document.querySelector('#current-status')
          information!.innerHTML = `The winner is Player ` + this.game.currentTurn;
        }
      });

      await this.game.checkGameEndFull().then((end: boolean) => { 
        if (this.game.gameStatus === 0 && end){
          const information = document.querySelector('#current-status')
          information!.innerHTML = `No winner: it's a draw`;
        }
      });

      this.game.changePlayer();

      if (this.game.gameStatus === 1) {
        const currentPlayer = 'Current turn: Player ' + this.game.currentTurn;
        const information = document.querySelector('#current-status');
        information!.innerHTML = currentPlayer;
      }
    }
  }
    
}