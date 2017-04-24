import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Events } from 'ionic-angular';


@Component({
  selector:    'tecno-player',
  templateUrl: 'tecno-player.html'
})
export class TecnoPlayerComponent implements OnInit, OnDestroy {
  @Input() titulo:   string;
  @Input() artista:  string;
  @Input() album:    string;
  @Input() cover:    string;
  @Input() audioSrc: string;

  public audio:         HTMLAudioElement;
  public ready:         boolean;
  public playing:       boolean;
  public audioPos:      number;
  public audioDuration:  number;
  
  constructor(public events: Events) {
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

    this.events.subscribe('cambio:volumen', (volumen) => {
      this.audio.volume = volumen/100;
    });
  }

  ngOnDestroy(){
    this.events.unsubscribe('cambio:volumen');
  }

  togglePlay(){
    if (!this.playing)
      this.audio.play();
    else
      this.audio.pause();
    this.playing = !this.playing;
  }

}
