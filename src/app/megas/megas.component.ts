import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-megas',
  templateUrl: './megas.component.html',
  styleUrl: './megas.component.css'
})
export class MegasComponent {
  numbers : String = '';
  bets : number = 6;
  betNum : Array<number> = [];
  drawNum : Array<number> = [];
  message : String = '';

  draw()
  {
    while(true)
    {
      for (let i = 0; i < 6; i++)
      {
        this.drawNum[i] = Math.floor(Math.random() * (60 - 1) + 1);
      }
      if (new Set(this.drawNum).size === this.drawNum.length) { break; }
    }
    console.log(this.drawNum);
  }

  bet()
  {
    let betNum = this.numbers.split(',');
    for (let i = 0; i < betNum.length; i++)
    {
      this.betNum[i] = Number(betNum[i]);
    }
    console.log(this.betNum);
    if (new Set(this.betNum).size !== this.betNum.length)
    {
      this.message = 'Existem números repetidos!'
      return false;
    }
    else
    {
      if (this.betNum.length == this.bets)
      { return true; }
      else
      {
        this.message = 'Você não colocou apenas ' + this.bets + ' números';
        return false;
      }
    }
  }

  verifyBet()
  {
    this.drawNum = [];
    let r = 0;

    if (this.bet())
    {
      this.draw();
      for (let i = 0; i < 6; i++)
      {
        for(let j = 0; j < 6; j++)
        {
          if (this.betNum[i] == this.drawNum[j])
          { r++; }
        }
      }
      this.message = 'Você acertou ' + r + ' números.';
    }
  }
}
