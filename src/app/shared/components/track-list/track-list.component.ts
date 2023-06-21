import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppEventService } from 'src/app/core/services/app-event.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit {
  @Input() tracks: any[] = [];

  constructor(private router: Router, private appService: AppEventService) {}

  ngOnInit(): void {}

  loadArtistProfile(artistId: number) {
    this.router.navigateByUrl(`/artist/${artistId}`);
  }
}
