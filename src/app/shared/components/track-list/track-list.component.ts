import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Track } from 'src/utils';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit {
  @Input() tracks: Track[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  loadArtistProfile(artistId: number) {
    this.router.navigateByUrl(`/artist/${artistId}`);
  }
}
