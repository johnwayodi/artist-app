import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-player',
  templateUrl: './track-player.component.html',
  styleUrls: ['./track-player.component.scss'],
})
export class TrackPlayerComponent implements OnInit {
  @Input() track: any;
  isPlaying = false;

  constructor() {}

  ngOnInit(): void {}
}
