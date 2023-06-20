import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { orderBy, uniqBy } from 'lodash';
import { format } from 'date-fns';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { MusicService } from 'src/app/core/services/music.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  albums: any[] = [];
  topTracks: any[] = [];
  artistId!: number;
  isLoading: Boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private musicService: MusicService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.artistId = params['artistId'];
      this.isLoading = true;
      this.getProfile();
    });
  }

  getProfile() {
    this.musicService.getProfile(this.artistId).subscribe((res) => {
      this.profile = res;
      this.getAlbums();
      this.getTopTracks();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }

  getAlbums() {
    this.musicService.getAlbums(this.artistId).subscribe((res) => {
      this.albums = uniqBy(
        orderBy(res.data, ['release_date'], ['desc']),
        'title'
      );
    });
  }

  getTopTracks() {
    this.musicService.getTopTracks(this.artistId).subscribe((res) => {
      let tracks = orderBy(res.data, ['rank'], ['desc']);
      this.topTracks = tracks.map((track) => {
        const duration = format(track.duration * 1000, 'mm:ss');
        track.duration = duration;
        return track;
      });
      this.isLoading = false;
    });
  }
}
