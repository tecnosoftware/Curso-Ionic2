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

  public audio:         any;
  public ready:         boolean;
  public playing:       boolean;
  public audioPos:      number;
  public audioDuration:  number;
  
  constructor() {
    this.ready    = false;
    this.playing  = false;
    this.audioPos = 0;
  }

  ngOnInit() {
    this.audio     = new Audio();
    this.audio.src = this.audioSrc;
    this.audio.load();

    this.audio.oncanplaythrough = () => {
      this.ready         = true;
      this.audioDuration = this.audio.duration;
    };

    this.audio.ontimeupdate = (event) => {
      this.audioPos = this.audio.currentTime;
    };

    this.audio.onended = () => {
      this.audioPos = 0;
      this.playing  = false;
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
