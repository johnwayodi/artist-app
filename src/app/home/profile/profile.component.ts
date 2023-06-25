import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { orderBy, uniqBy } from 'lodash';
import { format } from 'date-fns';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { MusicService } from 'src/app/core/services/music.service';
import { Album, Artist, Track } from 'src/utils';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile!: Artist;
  albums: Album[] = [];
  topTracks: Track[] = [];
  artistId!: number;
  isLoading: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
      this.topTracks = tracks.map((track: Track) => {
        const duration = format(track.duration * 1000, 'mm:ss');
        track.durationString = duration;
        return track;
      });
      this.isLoading = false;
      window.scrollTo({ top: 0, left: 0 });
    });
  }

  goToAlbum(albumId: number) {
    this.router.navigate([`/artist/${this.artistId}/albums/${albumId}`]);
  }
}
