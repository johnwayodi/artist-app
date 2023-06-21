import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from 'src/app/core/services/music.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss', '../profile/profile.component.scss'],
})
export class AlbumComponent implements OnInit {
  artistId!: number;
  albumId!: number;
  isLoading: Boolean = false;
  profile: any;
  album: any;
  tracks = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private musicService: MusicService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.artistId = params['artistId'];
      this.albumId = params['albumId'];
      this.isLoading = true;
      this.getAlbumDetails();
    });
  }

  getAlbumDetails() {
    this.musicService.getAlbumDetails(this.albumId).subscribe((res) => {
      this.album = res;
      this.tracks = res.tracks.data;
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      this.isLoading = false;
    });
  }

  loadArtistProfile(artistId: number) {
    this.router.navigateByUrl(`/artist/${artistId}`);
  }
}
