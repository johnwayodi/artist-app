import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit {
  @Input() tracks: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  loadArtistProfile(artistId: number) {
    this.router.navigateByUrl(`/artist/${artistId}`);
  }
}
