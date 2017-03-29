import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector:    'tecno-player',
  templateUrl: 'tecno-player.html'
})
export class TecnoPlayerComponent implements OnInit {
  @Input() titulo:   string;
  @Input() artista:  string;
  @Input() album:    string;
  @Input() cover:    string;
  @Input() audioSrc: string;

  public audio:   any;
  public ready:   boolean;
  public playing: boolean;
  
  constructor() {
    this.ready   = false;
    this.playing = false;
  }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = this.audioSrc;
    this.audio.load();

    this.audio.oncanplaythrough = () => {
      this.ready = true;
    };
  }

  togglePlay(){
    if (!this.playing)
      this.audio.play();
    else
      this.audio.pause();
    this.playing = !this.playing;
  }

}
