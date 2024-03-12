import { Component } from '@angular/core';

@Component({
  selector: 'app-megas',
  templateUrl: './megas.component.html',
  styleUrl: './megas.component.css'
})
export class MegasComponent {
  numbers : String = '';
  betNum : Array<number> = [];
  drawNum : Array<number> = [];
  guess : number = 0;

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
  }

  verifyBet()
  {
    let r = 0;
    this.draw(); this.bet();
    for (let i = 0; i < 6; i++)
    {
      for(let j = 0; j < 6; j++)
      {
        if (this.betNum[i] == this.drawNum[j])
        { r++; }
      }
    }
    this.guess = r;
  }
}
