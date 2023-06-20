import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit {
  @Input() tracks: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
