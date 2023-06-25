import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/core/services/music.service';
import { Artist } from 'src/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  artists: Artist[] = [];
  isLoading: boolean = false;
  // randomLetter: string = String.fromCharCode(
  //   97 + Math.floor(Math.random() * 26)
  // );
  randomLetter: string = 'col';
  constructor(private musicService: MusicService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.musicService.getArtists(this.randomLetter).subscribe((res) => {
      this.artists = res.data;
      this.isLoading = false;
    });
  }

  openArtistDetails(artistId: number): void {
    this.router.navigate(['artist', artistId]);
  }
}
