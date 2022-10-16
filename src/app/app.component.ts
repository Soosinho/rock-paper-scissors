import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  music: boolean = true
constructor() {
}
  ngOnInit(): void {
    if(this.music == true) {
      const music = new Audio('../assets/music.wav')
      music.loop = true
      music.play()
    }
  }

  title = 'angular-material-tutorial';
}
