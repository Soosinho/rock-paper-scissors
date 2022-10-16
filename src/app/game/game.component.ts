import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  choosen!: string
  botChoosen!: string
  winner!: string

  playerWins: number = 0
  botWins: number = 0

  timer!: any

  constructor() { }

  ngOnInit(): void {
  }


  playerChoice(option: string) {
    this.choosen = option

    if(this.timer) {
      clearTimeout(this.timer)
    }

    this.timer = setTimeout(() => {
      this.botChoice()
    }, 2000)
  }

  botChoice() {
    const random = Math.floor(Math.random() * 3 + 1)
    
    switch(random) {
      case 1: {
        this.botChoosen = 'rock'
        break
      }
      case 2: {
        this.botChoosen = 'paper'
        break
      }
      case 3: {
        this.botChoosen = 'scissors'
        break
      }
    }

    if(this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      this.revealWinner()
    }, 2000)

  }

  revealWinner() {
    const playerChoice = this.choosen
    const botChoice = this.botChoosen

    if(playerChoice == botChoice) {
      this.winner = 'draw'
    }

    else if(playerChoice == 'rock') {

      if(botChoice == 'paper') {
        this.winner = 'bot'

        this.botWins += 1
      }
      else {
        this.winner = 'player'

        this.playerWins += 1
      }

    }
    else if(playerChoice == 'paper') {

      if(botChoice == 'rock') {
        this.winner = 'player'

        this.playerWins += 1
      }
      else {
        this.winner = 'bot'

        this.botWins += 1
      }

    }
    else if(playerChoice == 'scissors') {
      
      if(botChoice == 'rock') {
        this.winner = 'bot'

        this.botWins += 1
      }
      else {
        this.winner = 'player'

        this.playerWins += 1
      }
    }
  }
}
